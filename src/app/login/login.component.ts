import {Component, inject} from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';
import {Router} from '@angular/router';
import {TokenService} from '../authentication/token.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
    imports: [NgIf, FormsModule]
})
export class LoginComponent {
  private loginService: AuthenticationService = inject(AuthenticationService);
  private tokenService: TokenService = inject(TokenService);
  username = '';
  password = '';
  message!: string;
  loggedIn = false;

  get isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  get loggedUser(): string|null {
    return this.loginService.getUser();
  }

  checkLogin(): void {
    this.message = '';
    this.loginService.login(this.username, this.password).subscribe({
        next: data => {
          this.tokenService.saveToken(data.token);
          this.tokenService.saveUserName(data.username);
          this.tokenService.saveUserRole(data.role);
          this.loggedIn = true;
        },
        error: err => {
          this.loggedIn = false;
          this.message = 'Invalid Login ' + err.error.message;
          setTimeout(() => {
            this.message = '';
          }, 3000);
        }
      }
    );
  }

  logout(): boolean {
    this.loginService.logout();
    return true;
  }
}
