import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Puzzle } from '../../../core/model/configuration';
import { ActionsVerticalComponent } from "../../shared/actions-vertical/actions-vertical.component";
import { ActionsHorizontalComponent } from "../../shared/actions-horizontal/actions-horizontal.component";

interface PuzzlePiece {
  id: number;
  row: number;
  col: number;
  correctPosition: number;
  currentPosition: number;
  isPlaced: boolean;
}

@Component({
  selector: 'app-game-puzzle',
  standalone: true,
  imports: [CommonModule, ActionsVerticalComponent, ActionsHorizontalComponent],
  templateUrl: './game-puzzle.component.html',
  styleUrl: './game-puzzle.component.css'
})
export class GamePuzzleComponent implements OnInit {
  @Input() puzzle!: Puzzle;
  @Input() puzzleImageUrl: string = './avif/puzzle/game_puzzle_1.avif';
  @Output() puzzleCompleted = new EventEmitter<boolean>();

  pieces: PuzzlePiece[] = [];
  gridSize = 3; // 3x3 grid
  draggedPiece: PuzzlePiece | null = null;
  showTitle = true;
  gameCompleted = false;

  ngOnInit() {
    this.initializePuzzle();
  }

  goToHome = () => {}

  goToPrevious = () => {}

  goToNext = () => {}

  initializePuzzle() {
    this.pieces = [];
    for (let i = 0; i < this.gridSize * this.gridSize; i++) {
      const row = Math.floor(i / this.gridSize);
      const col = i % this.gridSize;
      this.pieces.push({
        id: i,
        row,
        col,
        correctPosition: i,
        currentPosition: -1,
        isPlaced: false
      });
    }
    this.shufflePieces();
  }

  getPieceBackgroundStyle(piece: PuzzlePiece): any {
    // Para gridSize = 3, background-size = 300% y step = 50%
    const step = 100 / (this.gridSize - 1);
    const backgroundPosX = piece.col * step;
    const backgroundPosY = piece.row * step;

    return {
      'background-image': `url('${this.puzzleImageUrl}')`,
      'background-size': `${this.gridSize * 100}% ${this.gridSize * 100}%`,
      'background-position': `${backgroundPosX}% ${backgroundPosY}%`,
      'background-repeat': 'no-repeat',
      'width': '100%',
      'height': '100%'
    };
  }

  shufflePieces() {
    for (let i = this.pieces.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.pieces[i], this.pieces[j]] = [this.pieces[j], this.pieces[i]];
    }
  }

  onDragStart(event: DragEvent, piece: PuzzlePiece) {
    this.draggedPiece = piece;
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/html', piece.id.toString());
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

    const pieceInPosition = this.pieces.find(p => p.currentPosition === targetPosition);
    if (pieceInPosition) {
      pieceInPosition.currentPosition = this.draggedPiece.currentPosition;
      pieceInPosition.isPlaced = this.draggedPiece.currentPosition >= 0;
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

  getPieceAtPosition(position: number): PuzzlePiece | null {
    return this.pieces.find(p => p.currentPosition === position) || null;
  }

  getAvailablePieces(): PuzzlePiece[] {
    return this.pieces.filter(p => !p.isPlaced);
  }

  getPlacedPieces(): PuzzlePiece[] {
    return this.pieces.filter(p => p.isPlaced);
  }

  checkCompletion() {
    const isComplete = this.pieces.every(piece =>
      piece.isPlaced && piece.currentPosition === piece.correctPosition
    );
    if (isComplete && !this.gameCompleted) {
      this.gameCompleted = true;
      this.showTitle = false;
      this.puzzleCompleted.emit(true);
    }
  }

  resetGame() {
    this.pieces.forEach(piece => {
      piece.currentPosition = -1;
      piece.isPlaced = false;
    });
    this.shufflePieces();
    this.gameCompleted = false;
    this.showTitle = true;
  }

  getGridArray(): number[] {
    return Array.from({ length: this.gridSize * this.gridSize }, (_, i) => i);
  }

  getCorrectlyPlacedPieces(): number {
    return this.pieces.filter(p => p.isPlaced && p.currentPosition === p.correctPosition).length;
  }

  getCompletionPercentage(): number {
    return (this.getCorrectlyPlacedPieces() / this.pieces.length) * 100;
  }
}
