import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsVerticalComponent } from "../../shared/actions-vertical/actions-vertical.component";
import { ActionsHorizontalComponent } from "../../shared/actions-horizontal/actions-horizontal.component";
import { ConfigurationService } from '../../../core/services/configuration.service';
import { Configuration, GameMatchText } from '../../../core/model/configuration';
import { NavigationService } from '../../../core/services/navigation.service';

@Component({
  selector: 'app-game-match-text',
  imports: [CommonModule, ActionsVerticalComponent, ActionsHorizontalComponent],
  templateUrl: './game-match-text.component.html',
  styleUrl: './game-match-text.component.css'
})
export class GameMatchTextComponent {
  private navigationService = inject(NavigationService);
  private configurationService = inject(ConfigurationService);
  private configuration: Configuration | null = null;

  indexGameMatchText: number | null = null;
  gameMatchText: GameMatchText | null = null;
  firstTextOptions: any[] = [];
  secondTextOptions: any[] = [];
  lines: any[] = [];
  
  // Drawing state
  isDrawing: boolean = false;
  currentLine: any = null;
  startElement: { id: string; type: 'first' | 'second' } | null = null;

  private colors = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

  ngOnInit() {
    this.indexGameMatchText = this.navigationService.getIndexGameMatchText();
    this.configurationService.getConfiguration("000000001").then(config => {
      this.configuration = config;
      if (this.configuration && this.indexGameMatchText !== null) {
        this.gameMatchText = this.configuration.games[this.indexGameMatchText] as GameMatchText;
        this.initializeGame();
      }
    });
  }

  // Navigation handlers
  goToHome = () => this.navigationService.toMenuGames();
  goToPrevious = () => this.navigationService.previousInGame(this.indexGameMatchText!, this.configuration!);
  goToNext = () => this.navigationService.nextInGame(this.indexGameMatchText!, this.configuration!);

  private initializeGame() {
    if (!this.gameMatchText) return;

    // Create first text options
    this.firstTextOptions = this.gameMatchText.options.map((option, index) => ({
      id: `first-${index}`,
      text: option.first_text,
      index_match: option.index_match,
      isMatched: option.isMatched,
      color: this.colors[index % this.colors.length]
    }));

    // Create second text options
    this.secondTextOptions = this.gameMatchText.options.map((option, index) => ({
      id: `second-${index}`,
      text: option.second_text,
      index_match: option.index_match,
      isMatched: option.isMatched,
      color: this.colors[index % this.colors.length]
    }));

    // Shuffle the second options to make it challenging
    this.shuffleArray(this.secondTextOptions);
  }

  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  getFirstTextOptions(): any[] {
    return this.firstTextOptions;
  }

  getSecondTextOptions(): any[] {
    return this.secondTextOptions;
  }

  getColorForOption(option: any): string {
    return option.isMatched ? '#10b981' : option.color;
  }

  isFirstTextMatched(index: number): boolean {
    return this.firstTextOptions[index]?.isMatched || false;
  }

  isSecondTextMatched(index: number): boolean {
    return this.secondTextOptions[index]?.isMatched || false;
  }

  private getConnectorPosition(connectorId: string): { x: number; y: number } {
    const element = document.getElementById(connectorId);
    const container = document.getElementById('game-container');
    
    if (!element || !container) return { x: 0, y: 0 };
    
    const elementRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    return {
      x: elementRect.left - containerRect.left + elementRect.width / 2,
      y: elementRect.top - containerRect.top + elementRect.height / 2
    };
  }

  onMouseDown(event: MouseEvent, id: number, type: 'first' | 'second') {
    event.preventDefault();
    event.stopPropagation();
    
    const option = type === 'first' ? this.firstTextOptions[id] : this.secondTextOptions[id];
    if (option.isMatched) return;

    this.isDrawing = true;
    this.startElement = { id: id.toString(), type };
    
    const startPos = this.getConnectorPosition(`connector-${type}-${id}`);
    this.currentLine = {
      x1: startPos.x,
      y1: startPos.y,
      x2: startPos.x,
      y2: startPos.y,
      color: option.color
    };
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDrawing || !this.currentLine) return;
    
    const container = document.getElementById('game-container');
    if (!container) return;
    
    const containerRect = container.getBoundingClientRect();
    this.currentLine.x2 = event.clientX - containerRect.left;
    this.currentLine.y2 = event.clientY - containerRect.top;
  }

  onMouseUp(event: MouseEvent, id: number, type: 'first' | 'second') {
    if (!this.isDrawing || !this.startElement) return;
    
    event.preventDefault();
    event.stopPropagation();
    
    // Check if we're connecting different types
    if (this.startElement.type !== type) {
      const startId = parseInt(this.startElement.id);
      const endId = id;
      
      const startOption = this.startElement.type === 'first' ? 
        this.firstTextOptions[startId] : this.secondTextOptions[startId];
      const endOption = type === 'first' ? 
        this.firstTextOptions[endId] : this.secondTextOptions[endId];
      
      // Check if they match
      if (startOption.index_match === endOption.index_match && !startOption.isMatched && !endOption.isMatched) {
        // Create match
        startOption.isMatched = true;
        endOption.isMatched = true;
        
        const startPos = this.getConnectorPosition(`connector-${this.startElement.type}-${startId}`);
        const endPos = this.getConnectorPosition(`connector-${type}-${endId}`);
        
        this.lines.push({
          x1: startPos.x,
          y1: startPos.y,
          x2: endPos.x,
          y2: endPos.y,
          color: startOption.color
        });
        

        
        this.checkCompletion();
      }
    }
    
    this.isDrawing = false;
    this.currentLine = null;
    this.startElement = null;
  }

  onMouseLeave(_event: MouseEvent) {
    this.isDrawing = false;
    this.currentLine = null;
    this.startElement = null;
  }

  onMouseEnter(_id: number, _type: 'first' | 'second') {
    // Optional: Add hover effects
  }

  onDragStart(event: DragEvent) {
    event.preventDefault();
    return false;
  }

  onSelectStart(event: Event) {
    event.preventDefault();
    return false;
  }

  private checkCompletion() {
    const totalMatches = this.gameMatchText?.options.length || 0;
    const completedMatches = this.lines.length;
    
    if (completedMatches === totalMatches) {
      // Game completed!
      console.log('¡Juego completado!');
    }
  }

  resetGame() {
    this.firstTextOptions.forEach(option => option.isMatched = false);
    this.secondTextOptions.forEach(option => option.isMatched = false);
    this.lines = [];
    this.isDrawing = false;
    this.currentLine = null;
    this.startElement = null;
    
    // Re-shuffle second options
    this.shuffleArray(this.secondTextOptions);
  }

  getCompletionPercentage(): number {
    const totalMatches = this.gameMatchText?.options.length || 0;
    const completedMatches = this.lines.length;
    return totalMatches > 0 ? (completedMatches / totalMatches) * 100 : 0;
  }
}
