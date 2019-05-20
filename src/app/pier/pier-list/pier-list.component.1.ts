import { Component, OnInit } from '@angular/core';
import { PierService } from '../pier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pier-list',
  templateUrl: './pier-list.component.html',
  styleUrls: ['./pier-list.component.scss']
})
export class PierListComponent implements OnInit {
  pier
  piers

  constructor(private pierService: PierService,
    private router: Router) { }

  ngOnInit() {
    this.getPiers();
  }

  getPiers() {
    this.pierService.getPiers()
      .subscribe(piers => this.piers = piers)
  }

  delete(id) {
    this.pierService.deletePier(id)
      .subscribe(()=> this.getPiers())
  }

  editPier(id) {
    this.router.navigate([`/pier-edit/${id}`]);
  }
}
