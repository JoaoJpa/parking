import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AuthGuardLogin } from './core/guard/auth-guard-login';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CoreModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [AuthGuardLogin],
  bootstrap: [AppComponent]
})
export class AppModule { }
