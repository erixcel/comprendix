import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

   items = 6

   get numbers(): number[] {
     return Array.from({ length: this.items }, (_, i) => i)
   }

   getColorClasses(index: number) {
     switch (index % 3) {
       case 0:
         return { bg: 'bg-green-600', hover: 'hover:bg-green-700' }
       case 1:
         return { bg: 'bg-teal-500', hover: 'hover:bg-teal-600' }
       default:
         return { bg: 'bg-red-500', hover: 'hover:bg-red-600' }
     }
   }
}
