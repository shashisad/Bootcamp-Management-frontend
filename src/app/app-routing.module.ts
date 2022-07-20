import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NcgComponent} from "./ncg/ncg.component"
import {TeamComponent} from "./team/team.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {AssignmentComponent} from "./assignment/ncg-assignment/assignment.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AdminAssignmentComponent} from "./assignment/admin-assignment/admin-assignment.component"


const routes: Routes = [
  { path: 'assignments', component: AssignmentComponent},
  { path: 'ncg', component: NcgComponent},
  { path: 'mentor', component: NcgComponent},
  { path: 'team', component: TeamComponent},
  { path: 'landing', component: LandingPageComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin-assignments', component: AdminAssignmentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
