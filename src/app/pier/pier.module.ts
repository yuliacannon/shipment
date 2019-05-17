import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PierRoutingModule } from './pier-routing.module';
import { PierComponent } from './pier.component';
import { PierListComponent } from './pier-list/pier-list.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PierAddComponent } from './pier-add/pier-add.component';
import { PierEditComponent } from './pier-edit/pier-edit.component';

@NgModule({
  declarations: [
      PierComponent,
      PierListComponent,
      PierAddComponent,
      PierEditComponent
  ],
  imports: [
    CommonModule,
    PierRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PierModule { }