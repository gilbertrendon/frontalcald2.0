import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgserviceService} from '../ngservice.service';
import { Work } from '../work'; 

@Component({
  selector: 'app-addwork',
  templateUrl: './addwork.component.html',
  styleUrls: ['./addwork.component.css']
})
export class AddworkComponent implements OnInit {
  work = new Work();
  constructor(private _route: Router, private _service: NgserviceService) { }

  ngOnInit(): void {
  }

  addWork()
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
