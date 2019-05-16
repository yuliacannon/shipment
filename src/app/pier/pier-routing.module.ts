import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PierListComponent } from './pier-list/pier-list.component';

const routes: Routes = [
  {
    path: 'pier',
    component: PierListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PierRoutingModule { }
