import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminTeamsComponent} from "./components/admin-teams/admin-teams.component";
import {AdminAssignmentComponent} from "./components/admin-assignment/admin-assignment.component";
import {NcgComponent} from "./components/ncg-list/ncg.component";

import {ClarityModule} from "@clr/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {AdminPagesRoutingModule} from "./admin-pages-routing.module";
import {NcgModule} from "../ncg-pages/ncg.module";
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import {AdminSideNavComponent} from "../shared-components/admin-side-nav/admin-side-nav.component";
import { AdminMentorComponent } from './components/admin-mentor/admin-mentor.component';



@NgModule({
  declarations: [
    AdminTeamsComponent,
    AdminAssignmentComponent,
    NcgComponent,
    AdminHomeComponent,
    AdminSideNavComponent,
    AdminMentorComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminPagesRoutingModule,
    NcgModule,

  ],
  exports: [
    AdminTeamsComponent,
    AdminAssignmentComponent,
    NcgComponent,

  ]
})
export class AdminPagesModule { }
