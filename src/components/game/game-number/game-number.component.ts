import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsVerticalComponent } from "../../shared/actions-vertical/actions-vertical.component";
import { ActionsHorizontalComponent } from "../../shared/actions-horizontal/actions-horizontal.component";
import { ConfigurationService } from '../../../core/services/configuration.service';
import { Configuration, GameNumber } from '../../../core/model/configuration';
import { NavigationService } from '../../../core/services/navigation.service';

interface NumberOption {
  id: number;
  order: number;
  text: string;
}

@Component({
  selector: 'app-game-number',
  standalone: true,
  imports: [CommonModule, ActionsVerticalComponent, ActionsHorizontalComponent],
  templateUrl: './game-number.component.html',
  styleUrls: ['./game-number.component.css']
})
export class GameNumberComponent {
  private navigationService = inject(NavigationService);
  private configurationService = inject(ConfigurationService);
  private configuration: Configuration | null = null;

  indexGameNumber: number | null = null;
  gameNumber: GameNumber | null = null;
  options: NumberOption[] = [];
  draggedOption: NumberOption | null = null;

  ngOnInit() {
    this.indexGameNumber = this.navigationService.getIndexGameNumber();
    this.configurationService.getConfiguration("000000001").then(config => {
      this.configuration = config;
      if (this.configuration && this.indexGameNumber !== null) {
        this.gameNumber = this.configuration.games[this.indexGameNumber] as GameNumber;
        this.initializeOptions();
      }
    });
  }

  goToHome = () => {
    this.navigationService.toMenuGames();
  };
  
  goToPrevious = () => {
    this.navigationService.previousInGame(this.indexGameNumber!, this.configuration!);
  };
  
  goToNext = () => {
    this.navigationService.nextInGame(this.indexGameNumber!, this.configuration!);
  };

  private initializeOptions() {
    if (!this.gameNumber) return;

    this.options = this.gameNumber.options.map((option, index) => ({
      id: index,
      order: option.order,
      text: option.text
    }));

    this.shuffleOptions();
  }

  private shuffleOptions() {
    for (let i = this.options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
    }
  }

  onDragStart(event: DragEvent, option: NumberOption) {
    this.draggedOption = option;
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', option.id.toString());
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
  }

  onDrop(event: DragEvent, targetOption: NumberOption) {
    event.preventDefault();
    if (!this.draggedOption || this.draggedOption === targetOption) return;

    const draggedIndex = this.options.findIndex(o => o.id === this.draggedOption!.id);
    const targetIndex = this.options.findIndex(o => o.id === targetOption.id);

    if (draggedIndex !== -1 && targetIndex !== -1) {
      [this.options[draggedIndex], this.options[targetIndex]] = 
      [this.options[targetIndex], this.options[draggedIndex]];
    }

    this.draggedOption = null;
    this.checkCompletion();
  }

  checkCompletion() {
    if (!this.gameNumber) return;
    const isComplete = this.options.every((option, index) => 
      option.order === index + 1
    );
    
    if (isComplete) {
      // Game completed logic here
    }
  }

  resetGame() {
    this.shuffleOptions();
  }

  getPositionArray(): number[] {
    return Array.from({ length: this.options.length }, (_, i) => i);
  }

  getCorrectlyPlacedCount(): number {
    return this.options.filter((option, index) => 
      option.order === index + 1
    ).length;
  }

  getCompletionPercentage(): number {
    return (this.getCorrectlyPlacedCount() / this.options.length) * 100;
  }
}