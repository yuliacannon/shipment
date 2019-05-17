import { Component, OnInit } from '@angular/core';
import { PierService } from '../pier.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pier } from 'src/app/interfaces.model';

@Component({
  selector: 'app-pier-edit',
  templateUrl: './pier-edit.component.html',
  styleUrls: ['./pier-edit.component.scss']
})
export class PierEditComponent implements OnInit {
  maxAmount;
  minSubmersion;
  port;

  constructor(private pierService: PierService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.pierService.getPier(this.route.snapshot.params.id)
    console.log(this.pierService.getPier(this.route.snapshot.params.id))
      // .subscribe((res: Pier) => {
      //   this.maxAmount = res.maxAmount;
      //   this.minSubmersion = res.minSubmersion;
      //   this.port = res.port
      // });

  }

  edit(f: NgForm) {
    this.pierService.editPier(this.route.snapshot.params.id, f.value)
      .subscribe(() => this.router.navigate(['piers-list']))
  }

}
