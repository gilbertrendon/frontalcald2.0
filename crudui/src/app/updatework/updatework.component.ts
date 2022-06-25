import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgserviceService} from '../ngservice.service';
import { Work } from '../work'; 

@Component({
  selector: 'app-updatework',
  templateUrl: './updatework.component.html',
  styleUrls: ['./updatework.component.css']
})
export class UpdateworkComponent implements OnInit {
  work = new Work();
  constructor(private _route:Router,
    private rutaActiva: ActivatedRoute,
    private _service: NgserviceService) { }

  ngOnInit(): void {
    this.work.id = this.rutaActiva.snapshot.params.id;
    this.work.date = this.rutaActiva.snapshot.params.date;
    this.work.empAsign = this.rutaActiva.snapshot.params.empAsign;
    this.work.retdays = this.rutaActiva.snapshot.params.retdays;
    this.work.status = this.rutaActiva.snapshot.params.status;

    console.log(this.rutaActiva.snapshot.params.id);
  }

  updateWork()
  {
    this._service.addWork(this.work).subscribe
    (
      data=>
      {
        console.log("work added succesfully");
        this._route.navigate(['']);
      },

      error=>console.log("error")
    )
   
    this._route.navigate([''])

  }
  

}
