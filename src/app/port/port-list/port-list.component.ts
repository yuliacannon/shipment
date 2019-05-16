import { Component, OnInit, Input } from '@angular/core';
import { Port } from '../../interfaces.model'
import { PortService } from '../port.service'
import { Router } from '@angular/router';
import { PortEditComponent } from '../port-edit/port-edit.component'

@Component({
  selector: 'app-port-list',
  templateUrl: './port-list.component.html',
  styleUrls: ['./port-list.component.scss']
})
export class PortListComponent implements OnInit {
  ports: Port[];
  port

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

  getPort(id) {
    this.portService.getPort(id)
      .subscribe(port => {
        this.port = port
        this.router.navigate(['port-edit'])
        console.log(port)
      })
      
  }

}
