import { Component, inject } from '@angular/core';
import { NavigationService } from '../../../core/services/navigation.service';
import { ConfigurationService } from '../../../core/services/configuration.service';
import { Configuration, GameText } from '../../../core/model/configuration';
import { ActionsVerticalComponent } from "../../shared/actions-vertical/actions-vertical.component";
import { ActionsHorizontalComponent } from "../../shared/actions-horizontal/actions-horizontal.component";
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-game-text',
  imports: [ActionsVerticalComponent, ActionsHorizontalComponent],
  templateUrl: './game-text.component.html',
  styleUrl: './game-text.component.css'
})
export class GameTextComponent {
  private navigationService = inject(NavigationService);
  private configurationService = inject(ConfigurationService);
  private configuration: Configuration | null = null;
  private destroy$ = new Subject<void>();

  indexGameText: number | null = null;
  gameText: GameText | null = null;

  ngOnInit() {
    this.indexGameText = this.navigationService.getIndexGameText();
    this.navigationService.path$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.navigationService.cancelSpeech();
    });
    this.configurationService.getConfiguration("000000001").then(config => {
      this.configuration = config
      if (this.configuration && this.indexGameText !== null) {
        this.gameText = this.configuration.games[this.indexGameText] as GameText;
      }
    });
  }

  goToHome = () => {
    this.navigationService.toMenuGames();
  };
  speachText = () => {
    this.navigationService.cancelSpeech();
    if ('speechSynthesis' in window && this.gameText?.text) {
      const utterance = new SpeechSynthesisUtterance(this.gameText.text);
      window.speechSynthesis.speak(utterance);
    }
  };
  goToPrevious = () => {
    this.navigationService.previousInGame(this.indexGameText!, this.configuration!);
  };
  goToNext = () => {
    this.navigationService.nextInGame(this.indexGameText!, this.configuration!);
  };

}
