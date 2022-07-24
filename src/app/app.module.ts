import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule} from "@clr/angular";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HeaderComponent } from './shared-components/header/header.component';
import { SideNavComponent } from './shared-components/side-nav/side-nav.component';
import { ConfirmationModalComponent } from './shared-components/confirmation-modal/confirmation-modal.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminPagesModule } from './admin-pages/admin-pages.module';
import { LoginModule } from './shared-components/login/login.module';
import { NcgModule } from './ncg-pages/ncg.module';
import { ErrorPagesComponent } from './error-pages/error-pages.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    ConfirmationModalComponent,
    RegisterComponent,
    ErrorPagesComponent,
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
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
