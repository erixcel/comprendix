import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OptionNumberComponent } from '../option-number/option-number.component'; // Importar el nuevo componente

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, OptionNumberComponent], // Agregar el componente a los imports
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  questionNumber = 0;
  imageUrl = 'https://i.pinimg.com/736x/0e/9b/85/0e9b85e55146d9d392fdcee403d66c41.jpg';
  questionText = '¿Qué quería hacer Pipo?';
  options = [
    'Nadar en el hielo',
    'Volar como los pájaros',
    'Comer muchos peces',
    'No quería nada'
  ];

  selectedOption: number | null = null;
  correctOption = 1; // Volar como los pájaros
  items = 6;

  get numbers(): number[] {
    return Array.from({ length: this.items }, (_, i) => i);
  }

  isCurrentQuestion(index: number): boolean {
    return index === this.questionNumber;
  }

  getOptionLetter(index: number): string {
    return String.fromCharCode(97 + index);
  }

  getColorClasses(index: number) {
    switch (index % 3) {
      case 0: return { bg: 'bg-[#4acc23]', hover: 'hover:bg-[#5cdd35]' };
      case 1: return { bg: 'bg-[#0095a9]', hover: 'hover:bg-[#00a9c0]' };
      default: return { bg: 'bg-[#e23f30]', hover: 'hover:bg-[#f44f40]' };
    }
  }

  selectOption(i: number) {
    this.selectedOption = i;
  }

  isCorrect(i: number): boolean {
    return i === this.correctOption;
  }

  redirectToQuestion(index: number) {
    // Implementar lógica de navegación
    console.log('Navigate to question:', index);
  }
}
