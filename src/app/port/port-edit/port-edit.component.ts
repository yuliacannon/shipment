import { Component, OnInit, Input } from '@angular/core';
import { PortService } from '../port.service'
import { NgForm } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { Port } from 'src/app/interfaces.model';

@Component({
  selector: 'app-port-edit',
  templateUrl: './port-edit.component.html',
  styleUrls: ['./port-edit.component.scss']
})

export class PortEditComponent implements OnInit {
  name;
  address;
  country;

  constructor(private portService: PortService,
    private route: ActivatedRoute, private router: Router) {
    }  

  ngOnInit() {
    this.portService.getPort(this.route.snapshot.params.id)
      .subscribe((res: Port) => {
        this.name = res.name;
        this.address = res.address;
        this.country = res.country;
      });
  }

  edit(f: NgForm) {
    this.portService.editPort(this.route.snapshot.params.id, f.value)
      .subscribe(() => this.router.navigate(['ports-list']))
  }
}
