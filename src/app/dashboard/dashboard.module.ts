import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppItemComponent } from './app-item/app-item.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartDashboardComponent } from './chart-dashboard/chart-dashboard.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ServerGridComponent } from './server-grid/server-grid.component';
import { ServerItemComponent } from './server-item/server-item.component';
import { AppSharedModule } from '../app-shared/app-shared.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppSharedModule
  ],
  declarations: [DashboardComponent, AppItemComponent, BarChartComponent,
    ChartDashboardComponent, LineChartComponent, ServerGridComponent,
    ServerItemComponent]
})
export class DashboardModule { }
