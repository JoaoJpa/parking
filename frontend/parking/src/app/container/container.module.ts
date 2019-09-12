import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardHome } from '../core/guard/auth-guard-home';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


@NgModule({
  declarations: [HomeComponent, ToolbarComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule
  ],
  providers: [AuthGuardHome]

})
export class ContainerModule { }
