import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

const SESSION_STORAGE_USER = 'storeUser';
const ROUTER_INIT = '/home/car-yard';


@Injectable()
export class AuthGuardLogin implements CanActivate {

  constructor(private sessionService: SessionStorageService, private router: Router) {
  }

  canActivate() {
    const storeUser = this.sessionService.retrieve(SESSION_STORAGE_USER);
    if (storeUser) {
      this.router.navigate([ROUTER_INIT]);
    } else {
      this.sessionService.clear(SESSION_STORAGE_USER);
      return true;
    }
  }
}
