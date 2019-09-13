import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

const ROUTER_LOGIN = '/login';
const SESSION_STORAGE_USER = 'storeUser';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router, private storageService: SessionStorageService) { }

  ngOnInit() {
  }

  logOut() {
    this.router.navigate([ROUTER_LOGIN]);
    this.storageService.clear(SESSION_STORAGE_USER);
  }
}
