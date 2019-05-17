import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './http-errors/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PortListComponent } from './port/port-list/port-list.component';
import { PortAddComponent } from './port/port-add/port-add.component';
import { PortEditComponent } from './port/port-edit/port-edit.component';
import { PierListComponent } from './pier/pier-list/pier-list.component';
import { ShipListComponent } from './ship/ship-list/ship-list.component';
import { PierAddComponent } from './pier/pier-add/pier-add.component';
import { ShipAddComponent } from './ship/ship-add/ship-add.component';
import { PierEditComponent } from './pier/pier-edit/pier-edit.component';
import { ShipComponent } from './ship/ship.component';
import { ShipEditComponent } from './ship/ship-edit/ship-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'ports-list',
    component: PortListComponent
  },
  {
    path: 'port-add',
    component: PortAddComponent
  },
  {
    path: 'port-edit/:id',
    component: PortEditComponent
  },
  {
    path: 'ships-list',
    component: ShipListComponent
  },
  {
    path: 'piers-list',
    component: PierListComponent
  },
  {
    path: 'pier-add',
    component: PierAddComponent
  },
  {
    path: 'ship-add',
    component: ShipAddComponent
  },
  {
    path: 'pier-edit',
    component: PierEditComponent
  },
  {
    path: 'ship-edit',
    component: ShipEditComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
