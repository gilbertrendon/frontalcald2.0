import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgserviceService} from '../ngservice.service';
import { Work } from '../work'; 

@Component({
  selector: 'app-updatework',
  templateUrl: './updatework.component.html',
  styleUrls: ['./updatework.component.css']
})
export class UpdateworkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
