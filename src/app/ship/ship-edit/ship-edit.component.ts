import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShipService } from '../ship.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PierService } from 'src/app/pier/pier.service';
import { Ship } from 'src/app/interfaces.model';

@Component({
  selector: 'app-ship-edit',
  templateUrl: './ship-edit.component.html',
  styleUrls: ['./ship-edit.component.scss']
})
export class ShipEditComponent implements OnInit {
  piers;
  pier;
  name;
  tonnage;
  country;
  submersion;

  constructor(private shipService: ShipService,
    private route: ActivatedRoute, private router: Router,
    private pierService: PierService) { }

  ngOnInit() {
    this.shipService.getShip(this.route.snapshot.params.id)
      .subscribe((res: Ship) => {
        this.pier = res.pier;
        this.name = res.name;
        this.tonnage = res.tonnage;
        this.country = res.country;
        this.submersion = res.submersion;
      })
      this.getPiers();
  }

  edit(f: NgForm) {
    this.shipService.editShip(this.route.snapshot.params.id, f.value)
      .subscribe(() => this.router.navigate(['ships-list']))
  }

  getPiers() {
    this.pierService.getPiers()
      .subscribe(piers => this.piers = piers)
  }

}
