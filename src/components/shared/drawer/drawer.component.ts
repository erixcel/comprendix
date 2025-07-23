import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerService } from '../../../core/services/drawer.service';
import { AuthService } from '../../../core/services/auth.service';
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
  private router = inject(Router);

  drawerState$ = this.drawerService.drawerState$;

  get currentUser() {
    return this.authService.getCurrentUser();
  }

  get inicialUser() {
    return this.authService.getCurrentUser()?.username?.[0]?.toLocaleUpperCase();
  }

  closeDrawer() {
    this.drawerService.closeDrawer();
  }

  logout() {
    this.authService.signOut();
    this.drawerService.closeDrawer();
    this.router.navigate(['/auth']);
  }

  onBackdropClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeDrawer();
    }
  }
}
