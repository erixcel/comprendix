import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reading',
  imports: [CommonModule],
  templateUrl: './reading.component.html',
  styleUrl: './reading.component.css'
})
export class ReadingComponent {

   items = 6

   get numbers(): number[] {
     return Array.from({ length: this.items }, (_, i) => i)
   }

   getColorClasses(index: number) {
    switch (index % 3) {
      case 0:
        return { bg: 'bg-[#4acc23]', hover: 'hover:bg-[#5cdd35]' }
      case 1:
        return { bg: 'bg-[#0095a9]', hover: 'hover:bg-[#00a9c0]' }
      default:
        return { bg: 'bg-[#e23f30]', hover: 'hover:bg-[#f44f40]' }
    }
   }
}
