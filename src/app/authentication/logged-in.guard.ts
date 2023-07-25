import {CanActivateFn} from "@angular/router";
import {inject} from "@angular/core";
import {AuthenticationService} from "./authentication.service";

export const loggedInGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);

  return  authService.isLoggedIn();
};
