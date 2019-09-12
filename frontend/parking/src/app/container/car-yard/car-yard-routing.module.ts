import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridCarYardComponent } from './components/grid-car-yard/grid-car-yard.component';


const routes: Routes = [
  { path: '', component: GridCarYardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarYardRoutingModule { }
