import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent} from "./register/register.component";
import {ErrorPagesComponent} from "./error-pages/error-pages.component";
import {AdminLandingComponent} from "./shared-components/admin-landing/admin-landing.component";

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full'},

  { path: 'register', component: RegisterComponent},
  { path: 'admin-landing', component:AdminLandingComponent},
  {
    path: 'error',
    children: [
      {path: 'not-found', component: ErrorPagesComponent}
    ]
  },
  { path: '**', redirectTo: 'error/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
