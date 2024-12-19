import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";
import { CookieService } from 'ngx-cookie-service';

const AUTH_API = environment.authUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getToken(): string {
    return this.cookieService.get('ACCESS-TOKEN');
  }

  isAuthenticated(): boolean {
    return this.cookieService.check('ACCESS-TOKEN');
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/login',
      {
        username,
        password,
        responseType: "USER",
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/sign-up',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  // Удаление токена при выходе
  logout(): void {
    this.cookieService.delete('ACCESS-TOKEN');
  }
}
