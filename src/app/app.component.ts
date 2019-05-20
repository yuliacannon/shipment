import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PierService } from './pier/pier.service';
import { PortService } from './port/port.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ports
  constructor(private route: ActivatedRoute,
    private portService: PortService,
    private router: Router) {}

  ngOnInit() {
    this.getPorts();
  }

  search(f: NgForm) {
    const value = f.value.search

    if(this.route.snapshot._routerState.url === '/ports-list'){
      this.ports = this.ports.filter(p => p.name === value)
      this.router.navigate([`/ports-list`])
    }
    
  }

  getPorts() {
    this.portService.getPorts()
      .subscribe(ports => this.ports = ports)
  }
}
