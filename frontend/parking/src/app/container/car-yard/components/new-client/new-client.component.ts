import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestService } from 'src/app/shared/services/request.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastSystemService } from 'src/app/core/services/toast-system.service';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {

  formClient: FormGroup;
  constructor(private requestService: RequestService, private modalService: NgbModal, private toastService: ToastSystemService) { }

  ngOnInit() {
    this.formClient = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      cpf: new FormControl(null, [Validators.required]),
    });
  }

  createNewClient(contentNewClient) {
    this.formClient.reset();
    this.modalService.open(contentNewClient, { centered: true }).result.then(result => {
      if (result) {
        this.requestService.postRequest('client', this.formClient.getRawValue()).subscribe((value: Client) => {
          if (value) {
            this.toastService.success(`Criado novo Cliente`);
          } else {
            this.toastService.error('Erro ao criar Cliente');
          }
        }, () => {
          this.toastService.error('Erro ao criar Cliente');
        });
      }
    }, () => {});
  }

}
