import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { OptionNumberComponent } from '../../shared/option-number/option-number.component';
import { NavigationService } from '../../../core/services/navigation.service';
import { ConfigurationService } from '../../../core/services/configuration.service';
import { Configuration, Question } from '../../../core/model/configuration';
import { ActionsHorizontalComponent } from '../../shared/actions-horizontal/actions-horizontal.component';
import { ActionsVerticalComponent } from '../../shared/actions-vertical/actions-vertical.component';

@Component({
  selector: 'app-reading-question',
  imports: [CommonModule, OptionNumberComponent, ActionsHorizontalComponent, ActionsVerticalComponent],
  templateUrl: './reading-question.component.html',
  styleUrls: ['./reading-question.component.css'],
})
export class ReadingQuestionComponent {

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
    this.loadData();
    this.navigationService.path$.subscribe(() => {
      this.loadData();
    });
  }

  loadData(): void {
    this.selectedOptions = [];
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
    if (this.showCorrectAnswer) return;
    this.selectedOptions[optionIndex] = true;
    if (optionIndex === this.correctAnswerIndex) {
      this.showCorrectAnswer = true;
    }
  }

  getOptionLetter(index: number): string {
    return String.fromCharCode(65 + index);
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
    this.navigationService.toMenuReadings();
  }

  goToReading = () => {
    this.navigationService.toReading(this.indexReading || 0);
  }

  goToPrevious = () => {
    if (this.configuration && this.indexReading !== null && this.indexQuestion !== null) {
      if (this.indexQuestion > 0) {
        const indexQuestionPrevious = this.indexQuestion - 1;
        this.navigationService.toQuestion(this.indexReading, indexQuestionPrevious);
      } else {
        this.navigationService.toReading(this.indexReading);
      }
    }
  }

  goToNext = () => {
    if (this.configuration && this.indexReading !== null && this.indexQuestion !== null) {
      const questions = this.configuration.readings[this.indexReading].questions;
      if (this.indexQuestion < questions.length - 1) {
        const indexQuestionNext = this.indexQuestion + 1;
        this.navigationService.toQuestion(this.indexReading, indexQuestionNext);
      } else if (this.indexReading === this.configuration.readings.length - 1) {
        this.navigationService.toMenuGames();
      } else {
        this.navigationService.toReading(this.indexReading + 1);
      }
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
