import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-server-grid',
  templateUrl: './server-grid.component.html',
  styleUrls: ['./server-grid.component.scss']
})
export class ServerGridComponent implements OnInit {
  num = 20;
  serverlist = [];

  constructor(private serverInfoSvc: ServerService) { }

  ngOnInit() {
    this.serverInfoSvc.getServerItems().subscribe({
      next: (resp: any[]) => {
        this.serverlist = resp;
      }
    })
  }
  getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

}
