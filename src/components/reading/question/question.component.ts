import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  // Variables de ejemplo (puedes reemplazar por @Input() si lo necesitas)
  questionNumber = 0;
  imageUrl = 'https://cdn.pixabay.com/photo/2017/01/31/13/14/animal-2028258_1280.png';
  questionText = '¿Qué quería hacer Pipo?';
  options = [
    'Nadar en el hielo',
    'Volar como los pájaros',
    'Comer muchos peces',
    'No quería nada'
  ];

  selectedOption: number | null = null;
  correctOption = 0; // índice de la opción correcta (ejemplo: la primera)

  items = 6

  get numbers(): number[] {
    return Array.from({ length: this.items }, (_, i) => i)
  }

  isCurrentQuestion(index: number): boolean {
    return index === this.questionNumber;
  }

  getOptionLetter(index: number): string {
    return String.fromCharCode(97 + index);
  }

  getColorClasses(index: number) {
    switch (index % 3) {
      case 0:
        return { bg: 'bg-[#4acc23]', hover: 'hover:bg-[#5cdd35]' };
      case 1:
        return { bg: 'bg-[#0095a9]', hover: 'hover:bg-[#00a9c0]' };
      default:
        return { bg: 'bg-[#e23f30]', hover: 'hover:bg-[#f44f40]' };
    }
  }

  selectOption(i: number) {
    this.selectedOption = i;
  }

  isCorrect(i: number): boolean {
    return i === this.correctOption;
  }
}
