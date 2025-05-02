import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  private router = inject(Router);

  redirectToOptionReader(): void {
    this.router.navigate(['content/menu'], { queryParams: { option: 'reading' } }).then(() => {});
  }

  redirectToOptionPdf(): void {
    this.router.navigate(['content/menu'], { queryParams: { option: 'pdf' } }).then(() => {});
  }

  redirectToOptionGrasp(): void {
    this.router.navigate(['content/menu'], { queryParams: { option: 'games' } }).then(() => {});
  }
}
