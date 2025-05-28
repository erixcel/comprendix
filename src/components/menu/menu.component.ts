import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationService } from '../../core/services/navigation.service';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  private navigationService = inject(NavigationService);

  items = [
    {
      imageUrl: 'https://img.pikbest.com/png-images/20240809/a-drawing-of-a-penguin-with-white-face-and-brown-eyes_10712446.png!sw800',
      title: 'Título del libro 1',
      description: 'Descripción breve del libro...'
    },
    {
      imageUrl: 'https://img.pikbest.com/png-images/20240809/a-drawing-of-a-penguin-with-white-face-and-brown-eyes_10712446.png!sw800',
      title: 'Título del libro 2',
      description: 'Descripción breve del libro...'
    },
    {
      imageUrl: 'https://img.pikbest.com/png-images/20240809/a-drawing-of-a-penguin-with-white-face-and-brown-eyes_10712446.png!sw800',
      title: 'Título del libro 1',
      description: 'Descripción breve del libro...'
    },
    {
      imageUrl: 'https://img.pikbest.com/png-images/20240809/a-drawing-of-a-penguin-with-white-face-and-brown-eyes_10712446.png!sw800',
      title: 'Título del libro 2',
      description: 'Descripción breve del libro...'
    },
    {
      imageUrl: 'https://img.pikbest.com/png-images/20240809/a-drawing-of-a-penguin-with-white-face-and-brown-eyes_10712446.png!sw800',
      title: 'Título del libro 1',
      description: 'Descripción breve del libro...'
    },
    {
      imageUrl: 'https://img.pikbest.com/png-images/20240809/a-drawing-of-a-penguin-with-white-face-and-brown-eyes_10712446.png!sw800',
      title: 'Título del libro 2',
      description: 'Descripción breve del libro...'
    },
    {
      imageUrl: 'https://img.pikbest.com/png-images/20240809/a-drawing-of-a-penguin-with-white-face-and-brown-eyes_10712446.png!sw800',
      title: 'Título del libro 1',
      description: 'Descripción breve del libro...'
    },
    {
      imageUrl: 'https://img.pikbest.com/png-images/20240809/a-drawing-of-a-penguin-with-white-face-and-brown-eyes_10712446.png!sw800',
      title: 'Título del libro 2',
      description: 'Descripción breve del libro...'
    },
  ];

  redirectToReading(): void {
    this.navigationService.toReading("101");
  }

}
