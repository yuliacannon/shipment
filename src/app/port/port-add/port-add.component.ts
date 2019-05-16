import { Component, OnInit, Input } from '@angular/core';
import { PortService } from '../port.service';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-port-add',
  templateUrl: './port-add.component.html',
  styleUrls: ['./port-add.component.scss']
})
export class PortAddComponent implements OnInit {
  constructor(
    private portService: PortService,
    private router: Router) { 
    }

  

  ngOnInit() {
  }

  add(f: NgForm) {
    const port = JSON.stringify(f.value)
    this.portService.addPort(port)
      .subscribe(() => this.router.navigate(['ports-list']))
  }

}
