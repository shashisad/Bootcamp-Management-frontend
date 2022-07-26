import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule} from "@clr/angular";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ConfirmationModalComponent } from './shared-components/confirmation-modal/confirmation-modal.component';
import { RegisterComponent } from './register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AdminPagesModule } from './admin-pages/admin-pages.module';
import { LoginModule } from './shared-components/login/login.module';
import { NcgModule } from './ncg-pages/ncg.module';
import { ErrorPagesComponent } from './error-pages/error-pages.component';
import { AdminLandingComponent } from './shared-components/admin-landing/admin-landing.component';
import {AuthInterceptor} from "./shared-components/login/auth.interceptor";



@NgModule({
  declarations: [
    AppComponent,
    ConfirmationModalComponent,
    RegisterComponent,
    ErrorPagesComponent,
    AdminLandingComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    NcgModule,
    AdminPagesModule,
    AppRoutingModule,
    ClarityModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
