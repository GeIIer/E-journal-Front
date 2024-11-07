import {Component} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  onSubmit() {
    // Здесь вы обычно отправляете данные на сервер аутентификации
    if (this.email === 'test@example.com' && this.password === 'password123') {
      console.log('Успешная авторизация');
      this.errorMessage = '';
      // Перенаправление или сохранение токена и т.д.
    } else {
      this.errorMessage = 'Неверный email или пароль';
    }
  }

}
