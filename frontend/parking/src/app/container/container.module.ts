import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardHome } from '../core/guard/auth-guard-home';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent, ToolbarComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    SharedModule
  ],
  providers: [AuthGuardHome]

})
export class ContainerModule { }
