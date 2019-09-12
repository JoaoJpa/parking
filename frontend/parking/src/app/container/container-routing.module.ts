import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardHome } from '../core/guard/auth-guard-home';

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuardHome] ,children: [
      { path: 'car-yard', loadChildren: './car-yard/car-yard.module#CarYardModule' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
