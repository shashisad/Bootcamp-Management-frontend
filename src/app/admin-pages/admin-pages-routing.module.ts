import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NcgComponent} from "./components/ncg-list/ncg.component";
import { AdminAssignmentComponent} from "./components/admin-assignment/admin-assignment.component";
import { AdminTeamsComponent} from "./components/admin-teams/admin-teams.component";


const routes: Routes = [
  { path: 'ncg', component: NcgComponent},
  { path: 'admin-assignments', component: AdminAssignmentComponent},
  { path: 'admin-team', component: AdminTeamsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminPagesRoutingModule {}
