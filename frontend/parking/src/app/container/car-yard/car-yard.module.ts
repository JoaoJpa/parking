import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarYardRoutingModule } from './car-yard-routing.module';
import { GridCarYardComponent } from './components/grid-car-yard/grid-car-yard.component';
import { NgbModalModule, NgbTabsetModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewCarYardComponent } from './components/new-car-yard/new-car-yard.component';
import { NgxMaskModule } from 'ngx-mask';
import { ListParkigComponent } from './components/list-parkig/list-parkig.component';
import { NewClientComponent } from './components/new-client/new-client.component';


@NgModule({
  declarations: [GridCarYardComponent, NewCarYardComponent, ListParkigComponent, NewClientComponent],
  imports: [
    CommonModule,
    CarYardRoutingModule,
    NgbModalModule,
    SharedModule,
    ReactiveFormsModule,
    NgbTabsetModule,
    NgbPaginationModule,
    NgxMaskModule.forRoot(),
    NgbAlertModule
  ]
})
export class CarYardModule { }
