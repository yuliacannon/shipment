import { Component, OnInit } from '@angular/core';
import { PierService } from '../pier.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pier } from 'src/app/interfaces.model';
import { PortService } from 'src/app/port/port.service';

@Component({
  selector: 'app-pier-edit',
  templateUrl: './pier-edit.component.html',
  styleUrls: ['./pier-edit.component.scss']
})
export class PierEditComponent implements OnInit {
  maxAmount;
  minSubmersion;
  port;
  ports

  constructor(private pierService: PierService,
    private route: ActivatedRoute, private router: Router,
    private portService: PortService) { }

  ngOnInit() {
    this.pierService.getPier(this.route.snapshot.params.id)
      .subscribe((res: Pier) => {
        this.maxAmount = res.maxAmount;
        this.minSubmersion = res.minSubmersion;
        this.port = res.port.name
      });
      this.getPorts();
  }

  edit(f: NgForm) {
    this.pierService.editPier(this.route.snapshot.params.id, f.value)
      .subscribe(() => this.router.navigate(['piers-list']))
  }

  getPorts() {
    this.portService.getPorts()
      .subscribe(ports => this.ports = ports)
  }

}
