import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarYardResult } from '../../models/CarYardResult';
import { Parking } from '../../models/Parking';
import * as _ from 'lodash';
import { Vehicle } from '../../models/Vehicle';
import { ToastSystemService } from 'src/app/core/services/toast-system.service';
import { CarYard } from '../../models/CarYard';
import * as moment from 'moment';

@Component({
  selector: 'app-grid-car-yard',
  templateUrl: './grid-car-yard.component.html',
  styleUrls: ['./grid-car-yard.component.scss']
})
export class GridCarYardComponent implements OnInit {

  formVehicle: FormGroup;
  listCarYard: Array<CarYardResult> = [];
  page = 1;
  pageSize = 8;
  viewGrid: boolean;
  notVehicle: string;
  carYardSelect: CarYard;
  spaceSelect: Parking;
  vehicleSelect: Vehicle;

  constructor(private requestService: RequestService, private modalService: NgbModal, private toastService: ToastSystemService) { }

  ngOnInit() {
    this.formVehicle = new FormGroup({
      carPlace: new FormControl(null, [Validators.required]),
      color: new FormControl(null, [Validators.required]),
      model: new FormControl(null, [Validators.required]),
    });

    this.initGrid();
  }

  carYardListSpaces(carYardResult: CarYardResult): Array<Parking> {
    const list: Array<Parking> = carYardResult.parkingInCarYard;
    const qtdSpaces: number = carYardResult.carYard.carSpaces;

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

  occupedOrFinalizedParking(contentParking, contentPay, space: Parking, carYard: CarYard) {
    this.formVehicle.reset();
    this.carYardSelect = carYard;
    this.spaceSelect = space;
    if (space && !space.occupied) {
      this.modalService.open(contentParking, { centered: true });
    } else {
      this.modalService.open(contentPay, { centered: true });
    }
  }

  searchVihicle() {
    const carPlace = this.formVehicle.controls.carPlace.value;
    if (carPlace && carPlace.length === 6) {
      this.requestService.getRequest('vehicle/one', { carPlace } ).subscribe((vehicle: Vehicle) => {
        if (vehicle) {
          this.setFormVehicle(vehicle);
          this.notVehicle = null;
          this.vehicleSelect = vehicle;
        } else {
          this.notVehicle = 'Veiculo não encontrado, preencha os dados do veículo para ocupar a vaga';
          this.vehicleSelect = null;
        }
      });
    }
  }

  setFormVehicle(vehicle: Vehicle) {
    this.formVehicle.controls.carPlace.setValue(vehicle.carLicensePlace);
    this.formVehicle.controls.color.setValue(vehicle.color);
    this.formVehicle.controls.model.setValue(vehicle.model);
  }

  saveParking() {
    if (this.notVehicle) {
      this.requestService.postRequest('vehicle', this.formVehicle.getRawValue()).subscribe((vehicleResult: Vehicle) => {
        if (vehicleResult) {
         this.requestSaveParking(vehicleResult);
        } else {
          this.errorModal('Erro ao cadastra veiculo');
        }
      }, () => {
        this.errorModal('Erro ao cadastra veiculo');
      });
    } else {
      this.requestSaveParking(this.vehicleSelect);
    }
  }

  requestSaveParking(vehicleResult: Vehicle) {
    this.requestService.postRequest('parking', {
      vehicle: vehicleResult,
      carYard: this.carYardSelect,
      numberSpace: this.spaceSelect.numberSpace
    }).subscribe((parking: Parking) => {
      if (parking) {
        this.successModal('Vaga ocupada com sucesso');
        this.initGrid();
      } else {
        this.errorModal('Erro ao cadastra vaga');
      }
    }, () => {
      this.errorModal('Erro ao cadastra vaga');
    });
  }

  formatCarPlace(place: string) {
    return `${place.substring(0, 3)}-${place.substring(3, 6)}`;
  }

  duration(space: Parking): number {
    const duration = moment.duration(moment().diff(moment(space.dateIn))).asHours();
    return duration;
  }

  valuePay(space: Parking) {
    return this.duration(space) * this.carYardSelect.rate;
  }

  finalizeParking() {
    const idParking = this.spaceSelect.id;
    const value = this.valuePay(this.spaceSelect);
    const duration = this.duration(this.spaceSelect);
    const dateOut = moment().format('YYYY-MM-DD HH:mm:ss');

    this.requestService.putRequest('parking/finalized', { idParking, value, duration, dateOut }).subscribe(result => {
      if (result) {
        this.successModal(`Vaga Nº ${this.spaceSelect.numberSpace} liberada`);
        this.initGrid();
      } else {
        this.errorModal('Erro ao liberar vaga');
      }
    }, () => {
      this.errorModal('Erro ao liberar vaga');
    });
  }

  successModal(text: string) {
    this.modalService.dismissAll();
    this.toastService.success(text);
  }

  errorModal(text: string) {
    this.modalService.dismissAll();
    this.toastService.error(text);
  }

  initGrid() {
    this.viewGrid = false;
    this.requestService.getRequest('car-yard').subscribe((result: Array<CarYardResult>) => {
      this.listCarYard = result;
      this.viewGrid = true;
    });
  }

  qtdOccuped(resulCarYard: CarYardResult) {
    return resulCarYard.parkingInCarYard.filter(parking => parking.occupied).length;
  }

  qtdNotOccuped(resulCarYard: CarYardResult) {
    return resulCarYard.parkingInCarYard.filter(parking => !parking.occupied).length;
  }

}
