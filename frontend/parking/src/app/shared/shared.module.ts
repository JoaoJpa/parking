import { NgModule } from '@angular/core';
import { LabelsDirective } from './directives/labels.directive';
import { RequestService } from './services/request.service';

@NgModule({
  declarations: [LabelsDirective],
  imports: [ ],
  exports: [
    LabelsDirective
  ], 
  providers: [RequestService]
})
export class SharedModule { }
