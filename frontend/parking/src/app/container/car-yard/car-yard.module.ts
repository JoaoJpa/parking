import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarYardRoutingModule } from './car-yard-routing.module';
import { GridCarYardComponent } from './components/grid-car-yard/grid-car-yard.component';
import { NgbModalModule, NgbTabsetModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [GridCarYardComponent],
  imports: [
    CommonModule,
    CarYardRoutingModule,
    NgbModalModule,
    SharedModule,
    ReactiveFormsModule,
    NgbTabsetModule,
    NgbPaginationModule
  ]
})
export class CarYardModule { }
