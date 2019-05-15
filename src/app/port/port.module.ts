import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortRoutingModule } from './port-routing.module';
import { PortComponent } from './port.component';
import { PortListComponent } from './port-list/port-list.component';

@NgModule({
  declarations: [
    PortComponent,
    PortListComponent
  ],
  imports: [
    CommonModule,
    PortRoutingModule
  ]
})
export class PortModule { }