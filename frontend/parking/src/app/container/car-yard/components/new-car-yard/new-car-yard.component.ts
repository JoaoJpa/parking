import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastSystemService } from 'src/app/core/services/toast-system.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { CarYard } from '../../models/CarYard';

@Component({
  selector: 'app-new-car-yard',
  templateUrl: './new-car-yard.component.html',
  styleUrls: ['./new-car-yard.component.scss']
})
export class NewCarYardComponent implements OnInit {

  formCarYard: FormGroup;

  constructor(private requestService: RequestService, private modalService: NgbModal, private toastService: ToastSystemService) { }

  ngOnInit() {
    this.formCarYard = new FormGroup({
      description: new FormControl(null, [Validators.required]),
      rate: new FormControl(null, [Validators.required]),
      carSpaces: new FormControl(null, [Validators.required]),
    });
  }

  createNewCarYard(contentNewCarYard) {
    this.formCarYard.reset();
    this.modalService.open(contentNewCarYard, { centered: true }).result.then(result => {
      if (result) {
        this.requestService.postRequest('car-yard', this.formCarYard.getRawValue()).subscribe((value: CarYard) => {
          if (value) {
            this.toastService.success(`Criado novo pátio (${value.description})`);
          } else {
            this.toastService.error('Erro ao criar pátio');
          }
        }, () => {
          this.toastService.error('Erro ao criar pátio');
        });
      }
    }, () => {});
  }

}
