import {inject} from '@angular/core';
import {CanActivateFn} from '@angular/router';
import {AuthenticationService} from './authentication.service';

/*@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthenticationService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAdmin();
  }
}*/
export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);

  return  authService.isAdmin();
  // if (authService.isLoggedIn()) {return true; }
  // authService.redirectUrl = state.url;
  // router.navigate(['./login']).then(() => {});
  // return false;
};
