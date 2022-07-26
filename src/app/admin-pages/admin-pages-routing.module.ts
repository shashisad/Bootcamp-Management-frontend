import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NcgComponent} from "./components/ncg-list/ncg.component";
import { AdminAssignmentComponent} from "./components/admin-assignment/admin-assignment.component";
import { AdminTeamsComponent} from "./components/admin-teams/admin-teams.component";
import {AdminHomeComponent} from "./components/admin-home/admin-home.component";
import {AdminLandingComponent} from "../shared-components/admin-landing/admin-landing.component";
import {AdminMentorComponent} from "./components/admin-mentor/admin-mentor.component";


const routes: Routes = [
  {component: AdminHomeComponent,
    path: '',
    children: [
      { path: 'ncg', component: NcgComponent},
      { path: 'admin-assignments', component: AdminAssignmentComponent},
      { path: 'admin-team', component: AdminTeamsComponent},
      { path: 'admin-mentor', component: AdminMentorComponent},
      { path: 'admin-landing', component: AdminLandingComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminPagesRoutingModule {}
