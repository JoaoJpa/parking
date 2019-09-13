import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestService } from 'src/app/shared/services/request.service';
import { ToastSystemService } from 'src/app/core/services/toast-system.service';
import { LoginResult } from '../../models/LoginResult';
import {  Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { StorageUser } from '../../models/StorageUser';

const ROUTER_INIT = '/home/car-yard';
const SESSION_STORAGE_USER = 'storeUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  formRegister: FormGroup;
  resultLogin: LoginResult;

  constructor(private modalService: NgbModal, private requestService: RequestService, private toastService: ToastSystemService,
              private router: Router, private storageService: SessionStorageService) { }

  ngOnInit() {

    this.formLogin = new FormGroup({
      user: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });

    this.formRegister = new FormGroup({
      newUser: new FormControl(null, [Validators.required]),
      newName: new FormControl(null, [Validators.required]),
      newPassword: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null, [Validators.required])
    });
  }

  login() {
    const user: string = this.formLogin.controls.user.value;
    const password: string = this.formLogin.controls.password.value;
    this.validateLogin(user, password);
  }

  validateLogin(user: string, password: string) {
    if (!user && !password) {
      this.toastService.error('Preencha o campo Usuário e Senha');
    } else if (!user) {
      this.toastService.error('Preencha o campo Usuário');
    } else if (!password) {
      this.toastService.error('Preencha o campo Senha');
    } else {
      this.enterInApplication();
    }
  }

  enterInApplication() {
    this.requestService.postRequest('login', this.formLogin.getRawValue()).subscribe((result: LoginResult) => {
      if (result.loginOk) {
        this.directForInit(result);
      } else {
        this.toastService.error(result.error);
      }
    });
  }

  openModalRegister(contentRegister) {
    this.modalService.open(contentRegister, { centered: true });
  }

  createNewUser() {
    this.requestService.postRequest('login/new', this.formRegister.getRawValue()).subscribe((result: LoginResult) => {
      this.resultLogin = result;
      if (this.resultLogin.loginOk) {
        setTimeout(() => {
          this.modalService.dismissAll();
          this.directForInit(result);
        }, 3000);
      }
    });
  }

  directForInit(result: LoginResult) {
    this.storageService.store(SESSION_STORAGE_USER, new StorageUser(result.user, result.name));
    this.router.navigate([ROUTER_INIT]);
  }

}
