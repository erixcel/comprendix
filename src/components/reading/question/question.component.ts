import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { OptionNumberComponent } from '../option-number/option-number.component';
import { ActionsHorizontalComponent } from "../../menu/actions-horizontal/actions-horizontal.component";
import { ActionsVerticalComponent } from "../../menu/actions-vertical/actions-vertical.component"; // Importar el nuevo componente
import { NavigationService } from '../../../core/services/navigation.service';
import { ConfigurationService } from '../../../core/services/configuration.service';
import { Configuration, Question } from '../../../core/model/configuration';

@Component({
  selector: 'app-question',
  imports: [CommonModule, OptionNumberComponent, ActionsHorizontalComponent, ActionsVerticalComponent], // Agregar el componente a los imports
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent {

  private navigationService = inject(NavigationService);
  private configurationService = inject(ConfigurationService);
  private configuration: Configuration | null = null;

  indexReading: number | null = null;
  indexQuestion: number | null = null;
  question?: Question;

  selectedOptions: boolean[] = [];
  correctAnswerIndex: number | null = null;
  showCorrectAnswer = false;

  ngOnInit(): void {
    this.configurationService.getConfiguration("000000001").then(config => {
      this.configuration = config;
      this.indexReading = this.navigationService.getIndexReading();
      this.indexQuestion = this.navigationService.getIndexQuestion();
      if (this.indexReading !== null && this.indexQuestion !== null) {
        this.correctAnswerIndex = config.readings[this.indexReading].questions[this.indexQuestion].answer;
        this.question = config.readings[this.indexReading].questions[this.indexQuestion];
      }
    })
  }

  selectOption(optionIndex: number): void {
    // Si ya se mostró la respuesta correcta, no hacer nada
    if (this.showCorrectAnswer) return;

    // Marcar la opción seleccionada
    this.selectedOptions[optionIndex] = true;

    // Si es la respuesta correcta, marcarla como tal
    if (optionIndex === this.correctAnswerIndex) {
      this.showCorrectAnswer = true;
    }
  }

  getOptionLetter(index: number): string {
    return String.fromCharCode(65 + index); // Convierte 0->A, 1->B, etc.
  }

  getOptionClass(optionIndex: number) {
    if (this.selectedOptions[optionIndex]) {
      if (optionIndex === this.correctAnswerIndex) {
        return 'bg-green-500 text-white border-green-700';
      } else {
        return 'bg-red-500 text-white border-red-700';
      }
    }
    return '';
  }

  goToHome = () => {
    this.navigationService.toReadings();
  }

  speachText = () => {

  }

  goToNext = () => {

  }

  goToPrevious = () => {
    if (this.configuration && this.indexReading !== null && this.indexReading > 0) {
      const indexReadingPrevious = this.indexReading - 1;
      const indexQuestionPrevious = this.configuration.readings[indexReadingPrevious]?.questions?.length ? this.configuration.readings[indexReadingPrevious].questions.length - 1 : 0;
      this.navigationService.toQuestion(indexReadingPrevious, indexQuestionPrevious);
    } else {
      this.navigationService.toReadings();
    }
  }


  getColorClasses(index: number | null) {
    switch (index ? index % 3 : 0) {
      case 0: return { bg: 'bg-[#4acc23]', hover: 'hover:bg-[#5cdd35]' };
      case 1: return { bg: 'bg-[#0095a9]', hover: 'hover:bg-[#00a9c0]' };
      default: return { bg: 'bg-[#e23f30]', hover: 'hover:bg-[#f44f40]' };
    }
  }

}
