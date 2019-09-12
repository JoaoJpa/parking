import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

const SESSION_STORAGE_USER = 'storeUser';
const ROUTER_LOGIN = '/login';

@Injectable()
export class AuthGuardHome implements CanActivate {

  constructor(private sessionService: SessionStorageService, private route: Router) {
  }

  canActivate() {
    const storeUser = this.sessionService.retrieve(SESSION_STORAGE_USER);
    if (storeUser) {
      return true;
    } else {
      this.sessionService.clear(SESSION_STORAGE_USER);
      this.route.navigate([ROUTER_LOGIN]);
      return false;
    }
  }
}
