import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  twitterColor = '#00acee';
  facebookColor = '#3b5998';
  linkenInColor = '#0e76a8';
  gitHubColor = '#333';
  instagramColor: '#8134AF';
  appItems;
  constructor(private dashboardSvc: DashboardService,
    private router: Router) { 
  }

  ngOnInit() {
    this.dashboardSvc.getAppItems().subscribe({
      next: (resp: any []) => {
        console.log(resp);
        this.appItems = resp;
      }, error: (err) => {
        console.log(err);
      }
    })
  }

}
