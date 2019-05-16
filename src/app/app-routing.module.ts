import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './http-errors/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PortListComponent } from './port/port-list/port-list.component';
import { PortAddComponent } from './port/port-add/port-add.component';
import { PortEditComponent } from './port/port-edit/port-edit.component';

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
    path: 'port-edit',
    component: PortEditComponent
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
