import { Component, OnInit } from '@angular/core';
import { ShipService } from '../ship.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.scss']
})
export class ShipListComponent implements OnInit {
  ship
  ships

  constructor(private shipService: ShipService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getShips();
  }

  getShips() {
    this.shipService.getShips(this.route.snapshot.params.id)
      .subscribe(ships => this.ships = ships)
  }

  delete(id) {
    this.shipService.deleteShip(id)
      .subscribe(() => this.getShips())
  }

  editShip(id) {
    this.router.navigate([`/ship-edit/${id}`])
  }

}
