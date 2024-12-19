import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  loading: boolean = false;

  @Output('loggingIn') loggingIn = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['',],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      this.errorMessage = '';

      const {username, password} = this.loginForm.value;

      this.authService.login(username, password).subscribe({
        next: () => {
          this.loggingIn.emit(true);
          this.router.navigate(['/home'], { relativeTo: this.route })
            .then(() => console.log('Navigation successful', this.route))
            .catch(err => console.error('Navigation failed:', err));
        },
        error: (error) => {
          this.errorMessage = error.error.message || 'Произошла ошибка при входе';
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
