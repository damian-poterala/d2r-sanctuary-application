import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { passwordMatchValidator } from '../../../shared/validators/password-match.validator';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,

    InputTextModule,
    PasswordModule,
    CheckboxModule,
    ButtonModule,
    FloatLabelModule,
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private fb = inject(FormBuilder);

  registerForm = this.fb.nonNullable.group({
    username        : ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(20) ]],
    email           : ['', [ Validators.required, Validators.email ]],
    password        : ['', [ Validators.required, Validators.minLength(8) ]],
    confirmPassword : ['', Validators.required],
    acceptTerms     : [false, [ Validators.requiredTrue ]]
  },{
    validators: passwordMatchValidator()
  });

  isLoading: boolean = false;

  onSubmit(): void {
    if(this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    console.log(this.registerForm.getRawValue());

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
