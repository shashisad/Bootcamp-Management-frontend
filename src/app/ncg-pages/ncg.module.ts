import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentComponent} from "./components/ncg-assignment/assignment.component";
import { TeamComponent} from "./components/ncg-team/team.component";
import { LandingPageComponent} from "../shared-components/landing-page/landing-page.component";
import { BrowserModule} from "@angular/platform-browser";
import { ClarityModule} from "@clr/angular";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule} from "@angular/common/http";
import { NcgRoutingModule} from "./ncg-routing.module";
import {OrganizationChartModule} from "primeng/organizationchart";
import {StepsModule} from "primeng/steps";
import {HeaderComponent} from "../shared-components/header/header.component";
import {SideNavComponent} from "../shared-components/side-nav/side-nav.component";
import {HomeComponent} from "./components/home/home.component";
import {StatusIconComponent } from './status-icon/status-icon.component';

@NgModule({
  declarations: [
    AssignmentComponent,
    TeamComponent,
    LandingPageComponent,
    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    StatusIconComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        ClarityModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        OrganizationChartModule,
        StepsModule,
        NcgRoutingModule
    ],
  exports: [
    HeaderComponent,
    SideNavComponent,
    AssignmentComponent,
    TeamComponent,
    LandingPageComponent,
    StatusIconComponent
  ]
})
export class NcgModule { }
