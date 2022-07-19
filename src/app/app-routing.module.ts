import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SideNavComponent} from "./components/side-nav/side-nav.component";
import {AssignmentComponent} from "./assignment/assignment.component"
import {NcgComponent} from "./ncg/ncg.component"
import {LoginComponent} from "./login/login.component"
import {RegisterComponent} from "./register/register.component"

const routes: Routes = [
  { path: 'sidenav', component: SideNavComponent },
  { path: 'assignments', component: AssignmentComponent},
  { path: 'ncg', component: NcgComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
