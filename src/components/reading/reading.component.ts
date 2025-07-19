import { configuration } from './../../core/constants/configuration.config';
import { ModalService } from './../../core/services/modal.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationService } from '../../core/services/navigation.service';
import { OptionsVerticalComponent } from './options-vertical/options-vertical.component';
import { OptionsHorizontalComponent } from './options-horizontal/options-horizontal.component';
import { ActionsHorizontalComponent } from "../menu/actions-horizontal/actions-horizontal.component";
import { ActionsVerticalComponent } from "../menu/actions-vertical/actions-vertical.component";
import { Configuration, Reading } from '../../core/model/configuration';
import { ConfigurationService } from '../../core/services/configuration.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-reading',
  imports: [CommonModule, OptionsVerticalComponent, OptionsHorizontalComponent, ActionsVerticalComponent, ActionsHorizontalComponent],
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css'],
})
export class ReadingComponent {
  private navigationService = inject(NavigationService);
  private configurationService = inject(ConfigurationService);
  private modalService = inject(ModalService);
  private configuration: Configuration | null = null;
  private destroy$ = new Subject<void>();


  indexReading: number | null = null;

  reading?: Reading;
  items = 6

  constructor() {

  }

  ngOnInit(): void {
    this.navigationService.speechControl$.pipe(takeUntil(this.destroy$)).subscribe();

    this.configurationService.getConfiguration("000000001").then(config => {
      this.configuration = config;
      this.indexReading = this.navigationService.getIndexReading();
      if (this.indexReading !== null) {
        this.reading = config.readings[this.indexReading];
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  goToHome = () => {
    this.navigationService.toReadings();
  }

  speachText = () => {
    this.navigationService.cancelSpeech();
    if ('speechSynthesis' in window && this.reading?.text) {
      const utterance = new SpeechSynthesisUtterance(this.reading.text);
      window.speechSynthesis.speak(utterance);
    }
  }

  goToNext = () => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    this.modalService.openModalPhrase(this.reading?.phrase || '', randomNumber);
    setTimeout(() => {
      this.modalService.closeModalPhrase();
      this.navigationService.toQuestion(this.indexReading || 0, 0);
    }, 3000);
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

  getColorClasses(index: number) {
    switch (index % 3) {
      case 0: return { bg: 'bg-[#4acc23]', hover: 'hover:bg-[#5cdd35]' };
      case 1: return { bg: 'bg-[#0095a9]', hover: 'hover:bg-[#00a9c0]' };
      default: return { bg: 'bg-[#e23f30]', hover: 'hover:bg-[#f44f40]' };
    }
  }

  redirectToQuestion(number: number) {
    this.navigationService.toQuestion(this.indexReading || 0, number);
  }
}
