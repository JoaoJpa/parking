import { Component, OnInit } from '@angular/core';
import { LoadService } from 'src/app/core/services/loadService';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  subscribeLoad: any;
  viewLoad: boolean;
  constructor(private loaderService: LoadService) { }

  ngOnInit() {
    this.subscribeLoad = this.loaderService.subjectLoad.subscribe(stateLoad => {
      this.viewLoad = stateLoad;
    });
  }

}
