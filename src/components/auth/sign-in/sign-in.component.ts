import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  usernameOrEmail: string = '';
  password: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  async onSignIn(): Promise<void> {
    if (!this.usernameOrEmail.trim() || !this.password.trim()) {
      this.errorMessage = 'Por favor completa todos los campos';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    try {
      const result = await this.authService.signIn(this.usernameOrEmail.trim(), this.password);

      if (result.success) {
        this.router.navigate(['/content/welcome']);
      } else {
        this.errorMessage = result.message;
      }
    } catch (error) {
      this.errorMessage = 'Error al iniciar sesión';
    } finally {
      this.isLoading = false;
    }
  }

  goToSignUp(): void {
    this.router.navigate(['/auth/sign-up']);
  }
}
