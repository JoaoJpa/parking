import { NgModule, SkipSelf, Optional } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { LoadService } from './services/loadService';
import { ToastSystemService } from './services/toast-system.service';
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  declarations: [],
  imports: [
    ToastrModule.forRoot()
  ],
  providers: [LoadService, ToastSystemService]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
