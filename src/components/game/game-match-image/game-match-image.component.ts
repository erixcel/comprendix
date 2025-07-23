import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsVerticalComponent } from "../../shared/actions-vertical/actions-vertical.component";
import { ActionsHorizontalComponent } from "../../shared/actions-horizontal/actions-horizontal.component";
import { ConfigurationService } from '../../../core/services/configuration.service';
import { Configuration, GameMatchImage } from '../../../core/model/configuration';
import { NavigationService } from '../../../core/services/navigation.service';

interface LineCoordinates {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
}

@Component({
  selector: 'app-game-match-image',
  standalone: true,
  imports: [CommonModule, ActionsVerticalComponent, ActionsHorizontalComponent],
  templateUrl: './game-match-image.component.html',
  styleUrls: ['./game-match-image.component.css']
})
export class GameMatchImageComponent {
  private navigationService = inject(NavigationService);
  private configurationService = inject(ConfigurationService);
  private configuration: Configuration | null = null;

  indexGameMatchImage: number | null = null;
  gameMatchImage: GameMatchImage | null = null;
  shuffledOptions: GameMatchImage['options'] = [];
  lines: LineCoordinates[] = [];

  // Drawing state
  isCompleted: boolean = false;
  isDrawing: boolean = false;
  currentLine: LineCoordinates | null = null;
  startElement: { id: string; type: 'image' | 'text' } | null = null;

  ngOnInit() {
    this.indexGameMatchImage = this.navigationService.getIndexGameMatchImage();
    this.configurationService.getConfiguration("000000001").then(config => {
      this.configuration = config;
      if (this.configuration && this.indexGameMatchImage !== null) {
        this.gameMatchImage = this.configuration.games[this.indexGameMatchImage] as GameMatchImage;
        this.initializeGame();
      }
    });
  }

  // Navigation handlers
  goToHome = () => this.navigationService.toMenuGames();
  goToPrevious = () => this.navigationService.previousInGame(this.indexGameMatchImage!, this.configuration!);
  goToNext = () => this.navigationService.nextInGame(this.indexGameMatchImage!, this.configuration!);

  private initializeGame() {
    if (!this.gameMatchImage) return;

    // Reset all options to not matched state
    this.gameMatchImage.options.forEach(option => {
      option.isMatched = false;
    });

    // Create shuffled copy for text options
    this.shuffledOptions = [...this.gameMatchImage.options];
    this.shuffleArray(this.shuffledOptions);
    this.lines = [];
  }

  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  private getConnectorPosition(connectorId: string): { x: number; y: number } {
    const element = document.getElementById(connectorId);
    const container = document.getElementById('game-container');
    if (!element || !container) return { x: 0, y: 0 };

    const elementRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    return {
      x: elementRect.left + elementRect.width / 2 - containerRect.left,
      y: elementRect.top + elementRect.height / 2 - containerRect.top,
    };
  }

  onMouseDown(event: MouseEvent, index: number, type: 'image' | 'text') {
    event.preventDefault();
    event.stopPropagation();

    const option = this.getOptionByIndex(index, type);
    if (!option || option.isMatched) return;

    const connectorId = `connector-${type}-${index}`;
    const position = this.getConnectorPosition(connectorId);

    this.isDrawing = true;
    this.startElement = { id: index.toString(), type };
    this.currentLine = {
      x1: position.x,
      y1: position.y,
      x2: position.x,
      y2: position.y,
      color: this.getColorForOption(option)
    };
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDrawing || !this.currentLine) return;

    event.preventDefault();

    const container = document.getElementById('game-container');
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    this.currentLine = {
      ...this.currentLine,
      x2: event.clientX - containerRect.left,
      y2: event.clientY - containerRect.top
    };
  }

  onMouseUp(event: MouseEvent, index: number, type: 'image' | 'text') {
    event.preventDefault();
    event.stopPropagation();

    if (!this.isDrawing || !this.startElement) {
      this.resetDrawing();
      return;
    }

    // Only process if connecting different types
    if (this.startElement.type !== type) {
      this.processConnection(index, type);
    }

    this.resetDrawing();
  }

  onMouseEnter(index: number, type: 'image' | 'text') {
    if (this.isDrawing && this.startElement?.type !== type) {
      const dummyEvent = new MouseEvent('mouseup');
      this.onMouseUp(dummyEvent, index, type);
    }
  }

  onMouseLeave(event: MouseEvent) {
    event.preventDefault();
    this.resetDrawing();
  }

  onDragStart(event: DragEvent) {
    event.preventDefault();
    return false;
  }

  onSelectStart(event: Event) {
    if (this.isDrawing) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  private processConnection(targetIndex: number, targetType: 'image' | 'text') {
    const startIndex = parseInt(this.startElement!.id);
    const startType = this.startElement!.type;

    const imageIndex = startType === 'image' ? startIndex : targetIndex;
    const textIndex = startType === 'text' ? startIndex : targetIndex;

    const imageOption = this.getOptionByIndex(imageIndex, 'image');
    const textOption = this.getOptionByIndex(textIndex, 'text');
    const targetOption = this.getOptionByIndex(targetIndex, targetType);

    // Validate connection
    if (!imageOption || !textOption || !targetOption) return;
    if (targetOption.isMatched) return;
    if (imageOption.index_match !== textOption.index_match) return;

    // Remove existing connections for these elements
    this.removeExistingConnections(imageOption, textOption);

    // Mark as matched
    imageOption.isMatched = true;
    const shuffledTextOption = this.shuffledOptions.find(opt =>
      opt.index_match === textOption.index_match
    );
    if (shuffledTextOption) {
      shuffledTextOption.isMatched = true;
    }

    this.createLine(imageIndex, textIndex);
    this.checkCompletion();
  }

  private removeExistingConnections(imageOption: GameMatchImage['options'][0], textOption: GameMatchImage['options'][0]) {
    // Find and remove existing matches
    if (this.gameMatchImage) {
      this.gameMatchImage.options.forEach(opt => {
        if (opt.index_match === imageOption.index_match) {
          opt.isMatched = false;
        }
      });

      this.shuffledOptions.forEach(opt => {
        if (opt.index_match === textOption.index_match) {
          opt.isMatched = false;
        }
      });
    }

    // Remove existing lines for these options
    this.removeExistingLines(imageOption, textOption);
  }

  private createLine(imageIndex: number, textIndex: number) {
    const imageConnectorId = `connector-image-${imageIndex}`;
    const textConnectorId = `connector-text-${textIndex}`;
    const imagePos = this.getConnectorPosition(imageConnectorId);
    const textPos = this.getConnectorPosition(textConnectorId);

    const imageOption = this.getOptionByIndex(imageIndex, 'image');

    this.lines.push({
      x1: imagePos.x,
      y1: imagePos.y,
      x2: textPos.x,
      y2: textPos.y,
      color: this.getColorForOption(imageOption)
    });
  }

  private removeExistingLines(imageOption: GameMatchImage['options'][0], textOption: GameMatchImage['options'][0]) {
    if (!this.gameMatchImage) return;

    // Find indices for the options
    const imageIndex = this.gameMatchImage.options.findIndex(opt =>
      opt.index_match === imageOption.index_match
    );
    const textIndex = this.shuffledOptions.findIndex(opt =>
      opt.index_match === textOption.index_match
    );

    if (imageIndex === -1 || textIndex === -1) return;

    const imageConnectorId = `connector-image-${imageIndex}`;
    const textConnectorId = `connector-text-${textIndex}`;
    const imagePos = this.getConnectorPosition(imageConnectorId);
    const textPos = this.getConnectorPosition(textConnectorId);

    this.lines = this.lines.filter(line => {
      const isConnectedToImage = Math.abs(line.x1 - imagePos.x) < 20 && Math.abs(line.y1 - imagePos.y) < 20;
      const isConnectedToText = Math.abs(line.x2 - textPos.x) < 20 && Math.abs(line.y2 - textPos.y) < 20;
      const isConnectedToImageEnd = Math.abs(line.x2 - imagePos.x) < 20 && Math.abs(line.y2 - imagePos.y) < 20;
      const isConnectedToTextEnd = Math.abs(line.x1 - textPos.x) < 20 && Math.abs(line.y1 - textPos.y) < 20;

      return !(isConnectedToImage || isConnectedToText || isConnectedToImageEnd || isConnectedToTextEnd);
    });
  }

  private resetDrawing() {
    this.isDrawing = false;
    this.currentLine = null;
    this.startElement = null;
  }

  // Helper functions
  private getOptionByIndex(index: number, type: 'image' | 'text'): GameMatchImage['options'][0] | undefined {
    if (type === 'image') {
      return this.gameMatchImage?.options[index];
    } else {
      return this.shuffledOptions[index];
    }
  }

  getColorForOption(option: GameMatchImage['options'][0] | undefined): string {
    if (!option) return '#6b7280';
    const colors = ['#ef4444', '#22c55e', '#3b82f6', '#f97316', '#8b5cf6', '#f59e0b'];
    return colors[(option.index_match - 1) % colors.length] || '#6b7280';
  }

  isImageMatched(index: number): boolean {
    const option = this.gameMatchImage?.options[index];
    return option?.isMatched || false;
  }

  isTextMatched(index: number): boolean {
    const option = this.shuffledOptions[index];
    return option?.isMatched || false;
  }

  private checkCompletion() {
    if (this.gameMatchImage && this.isCompleted) {
      console.log('¡Juego completado correctamente!');
    }
  }

  resetGame() {
    if (this.gameMatchImage) {
      this.gameMatchImage.options.forEach(option => {
        option.isMatched = false;
      });
      this.isCompleted = false;
    }

    this.shuffledOptions.forEach(option => {
      option.isMatched = false;
    });

    this.lines = [];
    this.resetDrawing();
    this.shuffleArray(this.shuffledOptions);
  }

  getCompletionPercentage(): number {
    if (!this.gameMatchImage) return 0;
    const matchedCount = this.gameMatchImage.options.filter(opt => opt.isMatched).length;
    const percentage = (matchedCount / this.gameMatchImage.options.length) * 100;

    // Update completion status
    if (percentage === 100 && !this.isCompleted) {
      this.isCompleted = true;
    }

    return percentage;
  }

  getImageOptions() {
    return this.gameMatchImage?.options || [];
  }

  getTextOptions() {
    return this.shuffledOptions;
  }
}