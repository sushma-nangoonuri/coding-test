import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './app-item.component.html',
  styleUrls: ['./app-item.component.scss']
})
export class AppItemComponent implements OnInit {
  @Input() appColor = 'black';
  @Input() webUrl = '';
  @Input() iconClass;
  @Input() routeType = 'internal';
  @Input() viewDest;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCLick() {
    console.log("Clicked")
    if (this.routeType === 'internal') {
      if (this.viewDest && this.viewDest === 'chart') {
        this.router.navigate(['/dashboard/chart'])
      }
      if (this.viewDest && this.viewDest === 'grid') {
        this.router.navigate(['/dashboard/server-home'])
      }

    } else {
      window.location.href = this.webUrl;
    }
   
  }

}
