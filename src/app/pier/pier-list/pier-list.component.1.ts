import { Component, OnInit } from '@angular/core';
import { PierService } from '../pier.service';

@Component({
  selector: 'app-pier-list',
  templateUrl: './pier-list.component.html',
  styleUrls: ['./pier-list.component.scss']
})
export class PierListComponent implements OnInit {
  pier
  piers

  constructor(private pierService: PierService) { }

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

  // getPort(id) {
  //   this.portService.getPort(id)
  //     .subscribe(port => {
  //       this.port = port
  //       this.router.navigate(['port-edit'])
  //       console.log(port)
  //     })
      
  // }

}