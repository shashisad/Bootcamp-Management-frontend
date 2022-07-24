import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent} from "./register/register.component";
import {ErrorPagesComponent} from "./error-pages/error-pages.component";

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
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
