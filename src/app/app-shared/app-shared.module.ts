import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerInfoComponent } from './server-info/server-info.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModalModule,
  ],
  declarations: [ServerInfoComponent],
  entryComponents: [ServerInfoComponent],
  exports: [ServerInfoComponent, NgbModalModule]
})
export class AppSharedModule { }
