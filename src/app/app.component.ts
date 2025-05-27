import {Component, inject} from '@angular/core';
import {AuthenticationService} from "./authentication/authentication.service";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterLink, RouterOutlet]
})
export class AppComponent {
  private authService: AuthenticationService = inject(AuthenticationService);
  title = 'book-store';

  get login_label(): string {
    return this.authService.isLoggedIn() ? 'Logout' : 'Login';
  }
}
