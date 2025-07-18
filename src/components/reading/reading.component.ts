import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationService } from '../../core/services/navigation.service';
import { OptionsVerticalComponent } from './options-vertical/options-vertical.component';
import { OptionsHorizontalComponent } from './options-horizontal/options-horizontal.component';
import { ActionsHorizontalComponent } from "../menu/actions-horizontal/actions-horizontal.component";
import { ActionsVerticalComponent } from "../menu/actions-vertical/actions-vertical.component";
import { Reading } from '../../core/model/configuration';
import { ConfigurationService } from '../../core/services/configuration.service';

@Component({
  selector: 'app-reading',
  imports: [CommonModule, OptionsVerticalComponent, OptionsHorizontalComponent, ActionsVerticalComponent, ActionsHorizontalComponent],
  templateUrl: './reading.component.html',
  providers: [ConfigurationService]
})
export class ReadingComponent {
  private navigationService = inject(NavigationService);
  private configurationService = inject(ConfigurationService);

  reading?: Reading;
  items = 6

  constructor() {

  }

  ngOnInit(): void {
    this.configurationService.getConfiguration("000000001").then(config => {
      const indexReading = this.navigationService.getIndexReading();
      if (indexReading !== null) {
        this.reading = config.readings[indexReading];
      }

    })
    setTimeout(() => {

      console.log('Han pasado 3 segundos');

    }, 3000);
  }

  goToHome() {}

  speachText() {}

  goToNext() {}

  goToPrevious() {}

  getColorClasses(index: number) {
    switch (index % 3) {
      case 0: return { bg: 'bg-[#4acc23]', hover: 'hover:bg-[#5cdd35]' };
      case 1: return { bg: 'bg-[#0095a9]', hover: 'hover:bg-[#00a9c0]' };
      default: return { bg: 'bg-[#e23f30]', hover: 'hover:bg-[#f44f40]' };
    }
  }

  redirectToQuestion(number: number) {
    this.navigationService.toQuestion(0, number);
  }
}
