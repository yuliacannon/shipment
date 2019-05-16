import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortListComponent } from './port-list/port-list.component'

const routes: Routes = [
  {
    path: 'port',
    component: PortListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortRoutingModule { }
