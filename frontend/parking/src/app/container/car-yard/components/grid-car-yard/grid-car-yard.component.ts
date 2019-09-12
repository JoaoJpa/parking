import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarYard } from '../../models/CarYard';
import { ToastSystemService } from 'src/app/core/services/toast-system.service';
import { CarYardResult } from '../../models/CarYardResult';
import { Parking } from '../../models/Parking';
import * as _ from 'lodash';

@Component({
  selector: 'app-grid-car-yard',
  templateUrl: './grid-car-yard.component.html',
  styleUrls: ['./grid-car-yard.component.scss']
})
export class GridCarYardComponent implements OnInit {

  formCarYard: FormGroup;
  listCarYard: Array<CarYardResult> = [];
  page = 1;
  pageSize = 8;

  constructor(private requestService: RequestService, private modalService: NgbModal, private toastService: ToastSystemService) { }

  ngOnInit() {
    this.formCarYard = new FormGroup({
      description: new FormControl(null, [Validators.required]),
      rate: new FormControl(null, [Validators.required]),
      carSpaces: new FormControl(null, [Validators.required]),
    });
    this.requestService.getRequest('car-yard').subscribe((result: Array<CarYardResult>) => {
      this.listCarYard = result;
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

  carYardListSpaces(carYard: CarYardResult): Array<Parking> {
    const list: Array<Parking> = [];
    const qtdSpaces: number = carYard.carYard.carSpaces;
    const listItemResult: Array<Parking> = carYard.parkingInCarYard;

    list.concat(listItemResult);

    for (let index = 1; index <= qtdSpaces; index++) {
      if (!this.findItemParking(list, index)) {
        const parkingEmpety = new Parking();
        parkingEmpety.numberSpace = index;
        list.push(parkingEmpety);
      }
    }

    return _.orderBy(list, ['numberSpace']);
  }

  findItemParking(list: Array<Parking>, index: number): Parking {
    return list.find(item => item.numberSpace === index);
  }

}
