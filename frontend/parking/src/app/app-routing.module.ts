import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardLogin } from './core/guard/auth-guard-login';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: './login/login.module#LoginModule', canActivate: [AuthGuardLogin]},
  { path: 'home', loadChildren: './container/container.module#ContainerModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
