import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationService } from '../../core/services/navigation.service';
import { OptionsVerticalComponent } from './options-vertical/options-vertical.component';
import { OptionsHorizontalComponent } from './options-horizontal/options-horizontal.component';

@Component({
  selector: 'app-reading',
  standalone: true,
  imports: [CommonModule, OptionsVerticalComponent, OptionsHorizontalComponent],
  templateUrl: './reading.component.html',
  styleUrl: './reading.component.css'
})
export class ReadingComponent {
  private navigationService = inject(NavigationService);
  items = 6;

  getColorClasses(index: number) {
    switch (index % 3) {
      case 0: return { bg: 'bg-[#4acc23]', hover: 'hover:bg-[#5cdd35]' };
      case 1: return { bg: 'bg-[#0095a9]', hover: 'hover:bg-[#00a9c0]' };
      default: return { bg: 'bg-[#e23f30]', hover: 'hover:bg-[#f44f40]' };
    }
  }

  redirectToQuestion(number: number) {
    this.navigationService.toQuestion(0, number);
  }
}
