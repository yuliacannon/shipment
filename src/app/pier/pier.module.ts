import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PierRoutingModule } from './pier-routing.module';
import { PierComponent } from './pier.component';
import { PierListComponent } from './pier-list/pier-list.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      PierComponent,
      PierListComponent
  ],
  imports: [
    CommonModule,
    PierRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PierModule { }