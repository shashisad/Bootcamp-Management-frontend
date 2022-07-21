import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ClarityModule} from "@clr/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AssignmentComponent } from './ncg/ncg-assignment/assignment.component';
import { NcgComponent } from './ncg/ncg-list/ncg.component';
import { TeamComponent } from './ncg/ncg-team/team.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminAssignmentComponent } from './admin-pages/admin-assignment/admin-assignment.component';
import {OrganizationChartModule} from "primeng/organizationchart";
import {StepsModule} from "primeng/steps";
import { AdminTeamsComponent } from './admin-pages/admin-teams/admin-teams.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    AssignmentComponent,
    NcgComponent,
    TeamComponent,
    ConfirmationModalComponent,
    LandingPageComponent,
    RegisterComponent,
    LoginComponent,
    AdminAssignmentComponent,
    AdminTeamsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrganizationChartModule,
    StepsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
