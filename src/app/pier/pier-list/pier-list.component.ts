import { Component, OnInit } from '@angular/core';
import { PierService } from '../pier.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pier-list',
  templateUrl: './pier-list.component.html',
  styleUrls: ['./pier-list.component.scss']
})
export class PierListComponent implements OnInit {
  pier
  piers

  constructor(private pierService: PierService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPiers();
  }

  getPiers() {
    this.pierService.getPiers(this.route.snapshot.params.id)
      .subscribe(piers => this.piers = piers)
  }

  delete(id) {
    this.pierService.deletePier(id)
      .subscribe(()=> this.getPiers())
  }

  editPier(id) {
    this.router.navigate([`/pier-edit/${id}`]);
  }

  view(id) {
    this.router.navigate([`/ships-list/${id}`]);
  }
}
