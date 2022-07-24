import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AssignmentComponent} from "./components/ncg-assignment/assignment.component";
import {NcgComponent} from "../admin-pages/components/ncg-list/ncg.component";
import {TeamComponent} from "./components/ncg-team/team.component";
import {LandingPageComponent} from "../shared-components/landing-page/landing-page.component";


const routes: Routes = [
  { path: 'assignments', component: AssignmentComponent},
  { path: 'mentor', component: NcgComponent},
  { path: 'team', component: TeamComponent},
  { path: 'landing', component: LandingPageComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NcgRoutingModule { }
