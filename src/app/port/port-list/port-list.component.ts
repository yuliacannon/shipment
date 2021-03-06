import { Component, OnInit, Input } from '@angular/core';
import { Port } from '../../interfaces.model'
import { PortService } from '../port.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-port-list',
  templateUrl: './port-list.component.html',
  styleUrls: ['./port-list.component.scss']
})
export class PortListComponent implements OnInit {
  ports: Port[];

  constructor(private portService: PortService,
    private router: Router) { }

  ngOnInit() {
    this.getPorts();
  }

  getPorts() {
    this.portService.getPorts()
      .subscribe(ports => this.ports = ports)
  }

  delete(id) {
    this.portService.deletePort(id)
      .subscribe(()=> this.getPorts())
  }

  editPort(id) {
    this.router.navigate([`/port-edit/${id}`]);
  }

  view(id) {
    this.router.navigate([`/piers-list/${id}`]);
  }

}
