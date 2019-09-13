import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';
import { Parking } from '../../models/Parking';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-parkig',
  templateUrl: './list-parkig.component.html',
  styleUrls: ['./list-parkig.component.scss']
})
export class ListParkigComponent implements OnInit {

  listParking: Array<Parking> = [];
  page = 1;
  pageSize = 5;

  constructor(private requestService: RequestService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  viewListParking(contentListParking) {
    this.requestService.getRequest('parking').subscribe((result: Array<Parking>) => {
      this.listParking = result.concat(result).concat(result).concat(result);
      this.modalService.open(contentListParking, { size: 'xl', centered: true });
    });
  }

  formatCarPlace(place: string) {
    return `${place.substring(0, 3)}-${place.substring(3, 6)}`;
  }
}
