import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class LoadService {

  subjectLoad = new BehaviorSubject(false);
  constructor() { }

  showLoad() {
    this.subjectLoad.next(true);
  }

  hideLoad() {
    this.subjectLoad.next(false);
  }
}
