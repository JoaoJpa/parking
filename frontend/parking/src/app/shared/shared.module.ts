import { NgModule } from '@angular/core';
import { LabelsDirective } from './directives/labels.directive';
import { RequestService } from './services/request.service';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LabelsDirective, LoaderComponent],
  imports: [ CommonModule ],
  exports: [
    LabelsDirective,
    LoaderComponent
  ],
  providers: [RequestService]
})
export class SharedModule { }
