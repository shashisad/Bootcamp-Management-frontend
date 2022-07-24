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

@NgModule({
  declarations: [
    AssignmentComponent,
    TeamComponent,
    LandingPageComponent
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
    AssignmentComponent,
    TeamComponent,
    LandingPageComponent
  ]
})
export class NcgModule { }
