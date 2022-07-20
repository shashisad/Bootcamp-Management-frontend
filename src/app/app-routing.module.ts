import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AssignmentComponent} from "./assignment/assignment.component"
import {NcgComponent} from "./ncg/ncg.component"
import {TeamComponent} from "./team/team.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";

const routes: Routes = [
  { path: 'assignments', component: AssignmentComponent},
  { path: 'ncg', component: NcgComponent},
  { path: 'mentor', component: NcgComponent},
  { path: 'team', component: TeamComponent},
  { path: 'landing', component: LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
