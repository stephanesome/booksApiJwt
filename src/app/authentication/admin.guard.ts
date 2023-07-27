import {inject} from '@angular/core';
import {CanActivateFn} from '@angular/router';
import {AuthenticationService} from './authentication.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);

  return  authService.isAdmin();
};
