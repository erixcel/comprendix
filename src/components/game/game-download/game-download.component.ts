import { ConfigurationService } from '../../../core/services/configuration.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationService } from '../../../core/services/navigation.service';
import { Configuration, Game, GamePuzzle, Reading } from '../../../core/model/configuration';
import { ActionsVerticalComponent } from "../../shared/actions-vertical/actions-vertical.component";
import { ActionsHorizontalComponent } from "../../shared/actions-horizontal/actions-horizontal.component";

@Component({
  selector: 'app-game-download',
  imports: [CommonModule,ActionsVerticalComponent, ActionsHorizontalComponent],
  templateUrl: './game-download.component.html',
  styleUrl: './game-download.component.css'
})
export class GameDownloadComponent {
  private navigationService = inject(NavigationService);
  private configurationService = inject(ConfigurationService);

  games: Game[] = []
  config: Configuration | null = null;

  constructor() {

  }

  ngOnInit(): void {
    this.configurationService.getConfiguration("000000001").then(config => {
      this.config = config;
      this.games = config.games;
    })
  }

  goToHome = () => {
    this.navigationService.toWelcome();
  }

  goToPrevious = () => {
    if (this.config) this.navigationService.toDownloadReadings();
  }

  downloadPDF(index: number): void {
    const link = document.createElement('a');
    link.href = (this.games[index] as GamePuzzle).pdf_url;
    link.download = `${(this.games[index] as GamePuzzle).title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
