import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  stripeWidth = 30;
  private readonly yellowLight = '#f5e9a6';
  private readonly yellowDark = '#e6c84c';

  private router = inject(Router);

  redirectToSplash(): void {
    this.router.navigate(['/']).then(() => {});
  }

  get backgroundStyle() {
    const w = this.stripeWidth;
    return {
      backgroundImage: `repeating-linear-gradient(
        45deg,
        ${this.yellowLight},
        ${this.yellowLight} ${w}px,
        ${this.yellowDark} ${w}px,
        ${this.yellowDark} ${w * 2}px
      )`,
    };
  }
}
