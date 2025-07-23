import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerService } from '../../../core/services/drawer.service';
import { AuthService } from '../../../core/services/auth.service';
import { NavigationService } from '../../../core/services/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer',
  imports: [CommonModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent {
  private drawerService = inject(DrawerService);
  private authService = inject(AuthService);
  private navigationService = inject(NavigationService);
  private router = inject(Router);

  drawerState$ = this.drawerService.drawerState$;
  temporaryScore$ = this.drawerService.temporaryScore$;

  ngOnInit() {
  }

  get currentUser() {
    return this.authService.getCurrentUser();
  }

  get inicialUser() {
    return this.authService.getCurrentUser()?.username?.[0]?.toLocaleUpperCase();
  }

  get displayScore() {
    return this.drawerService.getCurrentDisplayScore();
  }

  get highestScore() {
    return this.drawerService.getFirebaseScore();
  }

  get currentScore() {
    return this.drawerService.getCurrentTemporaryScore();
  }

  closeDrawer() {
    this.drawerService.closeDrawer();
  }

  logout() {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      const userId = currentUser.id || currentUser.username;
      if (userId) {
        this.drawerService.clearUserProgress(userId);
      }
    }
    this.authService.signOut();
    this.drawerService.closeDrawer();
    this.router.navigate(['/auth']);
  }

  resetGame() {
    this.drawerService.resetGameProgress();
    this.drawerService.closeDrawer();
    this.navigationService.toMenuReadings();
  }

  onBackdropClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeDrawer();
    }
  }
}