import { Component, OnInit, Input } from '@angular/core';
import { PortService } from '../port.service'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-port-edit',
  templateUrl: './port-edit.component.html',
  styleUrls: ['./port-edit.component.scss']
})

export class PortEditComponent implements OnInit {
  sub 

  constructor(private portService: PortService,
    private router: Router) { 
      this.sub = this.portService.getPortValue()
      .subscribe(port => this.sub = port)
      console.log('syb',this.sub)
    }  

    ngOnDestroy() {
      this.sub.unsubscribe();
    }
  ngOnInit() {
  }

  edit(f: NgForm) {
    console.log('fdsgb',f)
    const port = JSON.stringify(f.value)
    this.portService.editPort(f.value._id, port)
      .subscribe(() => this.router.navigate(['ports-list']))
  }

}
