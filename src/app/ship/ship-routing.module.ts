import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipListComponent } from './ship-list/ship-list.component';

const routes: Routes = [
  {
    path: 'ship',
    component: ShipListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipRoutingModule { }
