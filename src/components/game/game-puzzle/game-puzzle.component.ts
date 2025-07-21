import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsVerticalComponent } from "../../shared/actions-vertical/actions-vertical.component";
import { ActionsHorizontalComponent } from "../../shared/actions-horizontal/actions-horizontal.component";
import { ConfigurationService } from '../../../core/services/configuration.service';
import { Configuration, GamePuzzle } from '../../../core/model/configuration';
import { NavigationService } from '../../../core/services/navigation.service';

@Component({
  selector: 'app-game-puzzle',
  standalone: true,
  imports: [CommonModule, ActionsVerticalComponent, ActionsHorizontalComponent],
  templateUrl: './game-puzzle.component.html',
  styleUrls: ['./game-puzzle.component.css']
})
export class GamePuzzleComponent {
  private navigationService = inject(NavigationService);
  private configurationService = inject(ConfigurationService);
  private configuration: Configuration | null = null;

  indexGamePuzzle: number | null = null;
  gamePuzzle: GamePuzzle | null = null;

  // extra
  draggedPiece: GamePuzzle['pieces'][number] | null = null;

  ngOnInit() {
    this.indexGamePuzzle = this.navigationService.getIndexGamePuzzle();
    this.configurationService.getConfiguration("000000001").then(config => {
      this.configuration = config;
      if (this.configuration && this.indexGamePuzzle !== null) {
        this.gamePuzzle = this.configuration.games[this.indexGamePuzzle] as GamePuzzle;
        this.initializePieces();
      }
    });
  }

  goToHome = () => {
    this.navigationService.toMenuGames();
  };
  goToPrevious = () => {
    this.navigationService.previousInGame(this.indexGamePuzzle!, this.configuration!);
  };
  goToNext = () => {
    this.navigationService.nextInGame(this.indexGamePuzzle!, this.configuration!);
  };

  private initializePieces() {
    if (!this.gamePuzzle) return;

    const size = this.gamePuzzle.gridSize;
    const total = size * size;
    const pieces = [];

    for (let i = 0; i < total; i++) {
      const row = Math.floor(i / size);
      const col = i % size;
      pieces.push({
        id: i,
        row,
        col,
        correctPosition: i,
        currentPosition: -1,
        isPlaced: false
      });
    }

    this.gamePuzzle.pieces = pieces;
    this.shufflePieces();
  }


  private shufflePieces() {
    if (!this.gamePuzzle) return;
    for (let i = this.gamePuzzle.pieces.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.gamePuzzle.pieces[i], this.gamePuzzle.pieces[j]] =
        [this.gamePuzzle.pieces[j], this.gamePuzzle.pieces[i]];
    }
  }

  get gridSize() {
    return this.gamePuzzle?.gridSize ?? 0;
  }

  get pieces() {
    return this.gamePuzzle?.pieces ?? [];
  }

  getPieceBackgroundStyle(piece: GamePuzzle['pieces'][number]) {
    const step = 100 / (this.gridSize - 1);
    return {
      'background-image': `url('${this.gamePuzzle?.image_url}')`,
      'background-size': `${this.gridSize * 100}% ${this.gridSize * 100}%`,
      'background-position': `${piece.col * step}% ${piece.row * step}%`,
      'background-repeat': 'no-repeat',
      'width': '100%',
      'height': '100%'
    };
  }

  onDragStart(event: DragEvent, piece: GamePuzzle['pieces'][number]) {
    this.draggedPiece = piece;
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', piece.id.toString());
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
  }

  onDrop(event: DragEvent, targetPosition: number) {
    event.preventDefault();
    if (!this.draggedPiece) return;

    const swap = this.pieces.find(p => p.currentPosition === targetPosition);
    if (swap) {
      swap.currentPosition = this.draggedPiece.currentPosition;
      swap.isPlaced = swap.currentPosition >= 0;
    }

    this.draggedPiece.currentPosition = targetPosition;
    this.draggedPiece.isPlaced = true;
    this.draggedPiece = null;
    this.checkCompletion();
  }

  onDropToAvailablePieces(event: DragEvent) {
    event.preventDefault();
    if (!this.draggedPiece) return;
    this.draggedPiece.currentPosition = -1;
    this.draggedPiece.isPlaced = false;
    this.draggedPiece = null;
  }

  checkCompletion() {
    if (!this.gamePuzzle) return;
    const isComplete = this.pieces.every(p =>
      p.isPlaced && p.currentPosition === p.correctPosition
    );
    if (isComplete) {

    }
  }

  resetGame() {
    if (!this.gamePuzzle) return;
    this.gamePuzzle.pieces.forEach(p => {
      p.currentPosition = -1;
      p.isPlaced = false;
    });
    this.shufflePieces();
  }

  getGridArray(): number[] {
    return Array.from({ length: this.gridSize * this.gridSize }, (_, i) => i);
  }

  getCorrectlyPlacedCount() {
    return this.pieces.filter(p => p.isPlaced && p.currentPosition === p.correctPosition).length;
  }

  getCompletionPercentage() {
    return (this.getCorrectlyPlacedCount() / this.pieces.length) * 100;
  }

  getAvailablePieces(): GamePuzzle['pieces'][number][] {
    return this.pieces.filter(p => !p.isPlaced);
  }

  getPieceAtPosition(position: number): GamePuzzle['pieces'][number] | null {
    return this.pieces.find(p => p.currentPosition === position) ?? null;
  }
}
