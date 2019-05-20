import { Component, OnInit } from '@angular/core';
import { Pier } from 'src/app/interfaces.model';
import { PierService } from 'src/app/pier/pier.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ShipService } from '../ship.service';

@Component({
  selector: 'app-ship-add',
  templateUrl: './ship-add.component.html',
  styleUrls: ['./ship-add.component.scss']
})
export class ShipAddComponent implements OnInit {
  piers: Pier[]

  constructor(private pierService: PierService,
    private router: Router,
    private shipService: ShipService) { }

  ngOnInit() {
    this.getPiers();
  }

  getPiers() {
    this.pierService.getPiers()
      .subscribe(piers => this.piers = piers)
  }

  add(f: NgForm) {
    const ship = JSON.stringify(f.value)
    this.shipService.addShip(ship)
      .subscribe(() => this.router.navigate(['ships-list']))
  }

}
