import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//list of all component
import { LoginComponent } from "./login/login.component";
import { UserComponent } from "./user/user.component";
const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'user', component : UserComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
