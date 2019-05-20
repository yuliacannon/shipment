import { Component, OnInit } from '@angular/core';
import { Port } from 'src/app/interfaces.model';
import { PortService } from 'src/app/port/port.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PierService } from '../pier.service';

@Component({
  selector: 'app-pier-add',
  templateUrl: './pier-add.component.html',
  styleUrls: ['./pier-add.component.scss']
})
export class PierAddComponent implements OnInit {
  ports: Port[]

  constructor(private portService: PortService,
    private router: Router,
    private pierService: PierService) { }

  ngOnInit() {
    this.getPorts();
  }

  getPorts() {
    this.portService.getPorts()
      .subscribe(ports => this.ports = ports)
  }

  add(f: NgForm) {
    const pier = JSON.stringify(f.value)
    this.pierService.addPier(pier)
      .subscribe(() => this.router.navigate(['piers-list']))
  }
}
