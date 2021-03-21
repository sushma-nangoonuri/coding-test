import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, AfterViewInit {
  title = 'angular8chartjs';
  canvas: any;
  ctx: any;
  constructor() {}
  ngOnInit() {}
  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new (window as any).Chart(this.ctx, {
      type: 'pie',
      data: {
          labels: ["New", "In Progress", "On Hold"],
          datasets: [{
              label: '# of Votes',
              data: [1,2,3],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: true
      }
    });
  }
}
