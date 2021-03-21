import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartDashboardComponent } from './chart-dashboard/chart-dashboard.component';
import { ServerGridComponent } from './server-grid/server-grid.component';

const routes: Routes = [
  {
    path:'home',
    component: DashboardComponent
  },
  {
    path:'chart',
    component: ChartDashboardComponent
  },
  {
    path:'server-home',
    component: ServerGridComponent
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
