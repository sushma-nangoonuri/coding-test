import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent implements OnInit, AfterViewInit {
  chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
  };
  ctx;
  canvas;
  MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  config = {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: this.chartColors.red,
        borderColor: this.chartColors.red,
        data: [
          99.4,
          100,
          83,
          45,
          100,
          120,
          111
        ],
        fill: false,
      }, {
        label: 'My Second dataset',
        fill: false,
        backgroundColor: this.chartColors.blue,
        borderColor: this.chartColors.blue,
        data: [
          99.4,
          100,
          83,
          45,
          100,
          120,
          111
        ],
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Line Chart'
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        }
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Month'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Value'
          }
        }
      }
    }
  };

  constructor() {
    
   }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.canvas = document.getElementById('line-canvas');
    this.ctx = this.canvas.getContext('2d');
		(window as any).myLine = new (window as any).Chart(this.ctx, this.config);
  }

}
