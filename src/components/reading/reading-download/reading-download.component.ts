import { ConfigurationService } from '../../../core/services/configuration.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationService } from '../../../core/services/navigation.service';
import { Configuration, Reading } from '../../../core/model/configuration';
import { ActionsVerticalComponent } from "../../shared/actions-vertical/actions-vertical.component";
import { ActionsHorizontalComponent } from "../../shared/actions-horizontal/actions-horizontal.component";


@Component({
  selector: 'app-reading-download',
  imports: [CommonModule, ActionsVerticalComponent, ActionsHorizontalComponent],
  templateUrl: './reading-download.component.html',
  styleUrl: './reading-download.component.css',
})
export class ReadingDownloadComponent {
  private navigationService = inject(NavigationService);
  private configurationService = inject(ConfigurationService);

  readings: Reading[] = []
  config: Configuration | null = null;

  constructor() {

  }

  ngOnInit(): void {
    this.configurationService.getConfiguration("000000001").then(config => {
      this.config = config;
      this.readings = config.readings;
    })
  }

  goToHome = () => {
    this.navigationService.toWelcome();
  }

  goToPrevious = () => {
    if (this.config) this.navigationService.toLastGame(this.config);
  }

  goToNext = () => {
    if (this.config) this.navigationService.toDownloadGames();
  }

  downloadPDF(index: number): void {
    const link = document.createElement('a');
    link.href = this.readings[index].pdf_url;
    link.download = `${this.readings[index].title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
