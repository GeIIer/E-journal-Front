import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'boxicons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './shared/menu/menu.module';
import {BodyModule} from "./shared/body/body.module";
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthModule} from "./pages/auth/auth.module";
import {CookieService} from "ngx-cookie-service";
import {AuthInterceptor} from "./services/auth.interseptor";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    HttpClientModule,
    BodyModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AuthModule,
  ],
  providers: [CookieService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
