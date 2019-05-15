import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './http-errors/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationTypeModule } from './location-type/location-type.module';
import { PortModule } from './port/port.module'
import './types';
import { ShipComponent } from './ship/ship.component';
import { PortComponent } from './port/port.component';
import { PierComponent } from './pier/pier.component';
import { PortListComponent } from './port/port-list/port-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    ShipComponent,
    PierComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LocationTypeModule,
    AppRoutingModule,
    PortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
