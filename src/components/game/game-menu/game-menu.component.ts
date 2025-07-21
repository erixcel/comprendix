import { NavigationService } from './../../../core/services/navigation.service';
import { Component, inject } from '@angular/core';
import { ActionsVerticalComponent } from "../../shared/actions-vertical/actions-vertical.component";
import { ActionsHorizontalComponent } from "../../shared/actions-horizontal/actions-horizontal.component";
import { ConfigurationService } from '../../../core/services/configuration.service';
import { Game } from '../../../core/model/configuration';

@Component({
  selector: 'app-game-menu',
  imports: [ActionsVerticalComponent, ActionsHorizontalComponent],
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.css']
})
export class GameMenuComponent {

  private navigationService = inject(NavigationService);
  private configurationService = inject(ConfigurationService);

  games: Game[] = []

  constructor() {

  }

  ngOnInit(): void {
    this.configurationService.getConfiguration("000000001").then(config => {
      this.games = config.games;
    })
  }

  goToHome = () => {
    this.navigationService.toWelcome();
  }

  goToPuzzle = (number: number) => {
    if (number < 0) return;

    let puzzleCount = 0;
    const indexGamePuzzle = this.games.findIndex(game =>
      game.type === "puzzle" && puzzleCount++ === number
    );

    if (indexGamePuzzle >= 0) {
      this.navigationService.toGamePuzzle(indexGamePuzzle.toString());
    }
  }
}
