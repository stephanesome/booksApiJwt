import {Component, inject} from '@angular/core';
import { AbstractControl, UntypedFormBuilder, ValidationErrors, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {AuthenticationService} from "../authentication/authentication.service";
import { NgIf } from '@angular/common';

function passwordMatcher(pwGrp: AbstractControl): ValidationErrors | null {
  const passwd = pwGrp.get('password');
  const confpasswd = pwGrp.get('confirmPassword');
  return passwd!.value === confpasswd!.value ? null : {mismatch: true};
}

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    standalone: true,
    imports: [NgIf, FormsModule, ReactiveFormsModule]
})
export class SignupComponent {
  private builder: UntypedFormBuilder = inject(UntypedFormBuilder);
  private authService: AuthenticationService = inject(AuthenticationService);
  message: string = '';
  signupForm = this.builder.group({
    username: ['', Validators.required],
    pwGroup: this.builder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validators: [passwordMatcher] })
  });

  get username(): AbstractControl {return <AbstractControl>this.signupForm.get('username'); }
  get password(): AbstractControl {return <AbstractControl>this.signupForm.get('pwGroup')!.get('password'); }
  get confirmPassword(): AbstractControl {return <AbstractControl>this.signupForm.get('pwGroup')!.get('confirmPassword'); }
  get pwGroup(): AbstractControl {return <AbstractControl>this.signupForm.get('pwGroup'); }

  register(): void {
    this.authService.register(this.username.value, this.password.value).subscribe({
        next: data => {
          this.message = data.message;
          setTimeout(() => {
            this.message = '';
            this.signupForm.reset();
          }, 3000);
        },
        error: error => {
          this.message = 'Registration ' + error.error.message;
          setTimeout(() => {
            this.message = '';
            this.signupForm.reset();
          }, 3000);
        }
      }
    );
  }
}

