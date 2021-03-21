import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sushma-ct';
  constructor(private router: Router) {

  }
  goHome(evt) {
    evt.preventDefault();
    this.router.navigate['/dashboard/home'];
  }
}
