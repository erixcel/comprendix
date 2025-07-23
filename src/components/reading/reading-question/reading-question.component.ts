import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { OptionNumberComponent } from '../../shared/option-number/option-number.component';
import { NavigationService } from '../../../core/services/navigation.service';
import { ConfigurationService } from '../../../core/services/configuration.service';
import { Configuration, Question } from '../../../core/model/configuration';
import { ActionsHorizontalComponent } from '../../shared/actions-horizontal/actions-horizontal.component';
import { ActionsVerticalComponent } from '../../shared/actions-vertical/actions-vertical.component';
import { DrawerService } from '../../../core/services/drawer.service';

@Component({
  selector: 'app-reading-question',
  imports: [CommonModule, OptionNumberComponent, ActionsHorizontalComponent, ActionsVerticalComponent],
  templateUrl: './reading-question.component.html',
  styleUrls: ['./reading-question.component.css'],
})
export class ReadingQuestionComponent {

  private navigationService = inject(NavigationService);
  private configurationService = inject(ConfigurationService);
  private drawerService = inject(DrawerService);
  private configuration: Configuration | null = null;

  // Expose Math to template
  Math = Math;

  indexReading: number | null = null;
  indexQuestion: number | null = null;
  question?: Question;

  selectedOptions: boolean[] = [];
  correctAnswerIndex: number | null = null;
  showCorrectAnswer = false;
  wrongAttempts = 0;
  questionAnswered = false;
  pointsEarned = 0;
  showPointsAnimation = false;

  ngOnInit(): void {
    this.loadData();
    this.navigationService.path$.subscribe(() => {
      this.loadData();
    });
  }

  loadData(): void {
    this.selectedOptions = [];
    this.correctAnswerIndex = null;
    this.showCorrectAnswer = false;
    this.wrongAttempts = 0;
    this.questionAnswered = false;
    this.pointsEarned = 0;
    this.showPointsAnimation = false;
    
    this.configurationService.getConfiguration("000000001").then(config => {
      this.configuration = config;
      this.indexReading = this.navigationService.getIndexReading();
      this.indexQuestion = this.navigationService.getIndexQuestion();
      
      if (this.indexReading !== null && this.indexQuestion !== null) {
        this.correctAnswerIndex = config.readings[this.indexReading].questions[this.indexQuestion].answer;
        this.question = config.readings[this.indexReading].questions[this.indexQuestion];
        
        // Check if this question was already completed
        this.questionAnswered = this.drawerService.isQuestionCompleted(this.indexReading, this.indexQuestion);
        this.wrongAttempts = this.drawerService.getQuestionAttempts(this.indexReading, this.indexQuestion);
        
        if (this.questionAnswered) {
          this.showCorrectAnswer = true;
          // Mark the correct answer as selected
          this.selectedOptions[this.correctAnswerIndex] = true;
          
          // Mark wrong answers as selected too
          const wrongAnswers = this.drawerService.getQuestionWrongAnswers(this.indexReading, this.indexQuestion);
          wrongAnswers.forEach(wrongIndex => {
            this.selectedOptions[wrongIndex] = true;
          });
        }
      }
    })
  }

  selectOption(optionIndex: number): void {
    if (this.showCorrectAnswer || this.questionAnswered) return;
    if (this.indexReading === null || this.indexQuestion === null) return;
    
    this.selectedOptions[optionIndex] = true;
    const isCorrect = optionIndex === this.correctAnswerIndex;
    
    // Record the attempt in the tracking system
    const result = this.drawerService.recordQuestionAttempt(
      this.indexReading, 
      this.indexQuestion, 
      optionIndex,
      isCorrect
    );
    
    if (isCorrect) {
      // Correct answer
      this.showCorrectAnswer = true;
      this.questionAnswered = true;
      this.pointsEarned = result.pointsEarned;
      this.showPointsAnimation = true;
      
      // Hide animation after 3 seconds
      setTimeout(() => {
        this.showPointsAnimation = false;
        this.goToNext();
      }, 3000);
    } else {
      // Wrong answer - update attempts count
      this.wrongAttempts = result.totalAttempts;
    }
  }

  getOptionLetter(index: number): string {
    return String.fromCharCode(65 + index);
  }

  getOptionClass(optionIndex: number) {
    if (this.selectedOptions[optionIndex]) {
      if (optionIndex === this.correctAnswerIndex) {
        return 'bg-green-500 text-white border-green-700 correct-answer';
      } else {
        return 'bg-red-500 text-white border-red-700 wrong-answer';
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

  goToNext = async () => {
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
