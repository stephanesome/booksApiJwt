import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {TokenService} from './token-service';

const Url = 'http://localhost:8080/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private http: HttpClient = inject(HttpClient);
  private tokenService: TokenService = inject(TokenService);

  login(username: string, password: string): Observable<any> {
    return this.http.post(Url + 'signin', {
      username,
      password
    });
  }

  logout(): void {
    this.tokenService.signOut();
  }

  getUser(): string|null {
    return this.tokenService.getUser();
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  isAdmin(): boolean {
    return this.tokenService.getRole() === 'ROLE_ADMIN';
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(Url + 'signup', {
      username,
      password
    });
  }
}
