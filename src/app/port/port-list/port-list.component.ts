import { Component, OnInit } from '@angular/core';
import { Port } from '../../interfaces.model'
import { PortService } from '../port.service'

@Component({
  selector: 'app-port-list',
  templateUrl: './port-list.component.html',
  styleUrls: ['./port-list.component.scss']
})
export class PortListComponent implements OnInit {
  ports: Port[];

  constructor(private portService: PortService) { }

  ngOnInit() {
    this.getPorts();
  }

  getPorts() {
    this.portService.getPorts()
      .subscribe(ports => this.ports = ports)
  }

}
