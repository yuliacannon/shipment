import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShipComponent } from './ship.component';
import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipRoutingModule } from './ship-routing.module';
import { ShipEditComponent } from './ship-edit/ship-edit.component';
import { ShipAddComponent } from './ship-add/ship-add.component';

@NgModule({
  declarations: [
      ShipComponent,
      ShipListComponent,
      ShipEditComponent,
      ShipAddComponent
  ],
  imports: [
    CommonModule,
    ShipRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShipModule { }