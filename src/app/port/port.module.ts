import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortRoutingModule } from './port-routing.module';
import { PortComponent } from './port.component';
import { PortListComponent } from './port-list/port-list.component';
import { PortAddComponent } from './port-add/port-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortEditComponent } from './port-edit/port-edit.component';

@NgModule({
  declarations: [
    PortComponent,
    PortListComponent,
    PortAddComponent,
    PortEditComponent
  ],
  imports: [
    CommonModule,
    PortRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PortModule { }