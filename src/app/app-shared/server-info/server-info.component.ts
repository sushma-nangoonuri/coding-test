import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-server-info',
  templateUrl: './server-info.component.html',
  styleUrls: ['./server-info.component.scss']
})
export class ServerInfoComponent implements OnInit {
  @Input() selectedServer;

  constructor(public activeModal: NgbActiveModal ) { }

  ngOnInit() {
  }

}
