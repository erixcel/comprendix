import { NavigationService } from './../../core/services/navigation.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  private navigationService = inject(NavigationService);

  redirectToReadings(): void {
    this.navigationService.toReadings();
  }

  redirectToGames(): void {
    this.navigationService.toGames();
  }

  downloadPdf(): void {

  }

}
