import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServerInfoComponent } from 'src/app/app-shared/server-info/server-info.component';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.scss']
})
export class ServerItemComponent implements OnInit {
  @Input() serverInfo;
  iconColor = this.getRandomColor();

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  onServerSelect(evt) {
    evt.preventDefault();
    console.log('Click Happened')
    const modalRef = this.modalService.open(ServerInfoComponent);
    modalRef.componentInstance.selectedServer = this.serverInfo;
    modalRef.result.then((result) => {
      
    })
  }
  getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }


}
