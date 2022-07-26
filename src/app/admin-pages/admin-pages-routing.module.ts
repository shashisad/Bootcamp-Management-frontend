import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NcgComponent} from "./components/ncg-list/ncg.component";
import { AdminAssignmentComponent} from "./components/admin-assignment/admin-assignment.component";
import { AdminTeamsComponent} from "./components/admin-teams/admin-teams.component";
import {AdminMentorComponent} from "./components/admin-mentor/admin-mentor.component";


const routes: Routes = [
  { path: 'ncg', component: NcgComponent},
  { path: 'admin-assignments', component: AdminAssignmentComponent},
  { path: 'admin-team', component: AdminTeamsComponent},
  { path: 'admin-mentor', component: AdminMentorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminPagesRoutingModule {}
