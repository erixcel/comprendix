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

  redirectToMenuReadings(): void {
    this.navigationService.toMenuReadings();
  }

  redirectToMenuGames(): void {
    this.navigationService.toMenuGames();
  }

  redirectToDownload(): void {
    this.navigationService.toDownloadReadings();
  }

  redirectToYoutube(): void {
    
  }

}
