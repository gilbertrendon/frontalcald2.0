import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import {UserService} from "../services/user.service";
import {User} from "../user";
import {Flight} from "../flight";


@Component({
  selector: 'app-flightlist',
  templateUrl: './flightlist.component.html',
  styleUrls: ['./flightlist.component.css'],
  providers: [UserService],
})
export class FlightlistComponent implements OnInit {
  //, private _route:Route
  constructor(public userService:UserService, private _service:NgserviceService, private _route:Router) { }

  _usersList: User[];
  _flightList: Flight[];

  ngOnInit(): void {
    this.getUsers();
    this._service.fetchFlightListFromRemote().subscribe(
      data=>{
              console.log("Response received");
              this._flightList=data;
      },
      error=>console.log("Exception ocurred")
    )
  }

  //NOTA: es posible que el arreglo users no devuelva elementos debido a que la lógica es complicada de entender
  getUsers(){
    this.userService.getUsers().subscribe((res) =>{
      this.userService.users = res;
    });
  }

  //Para hacer las reservas
  addReserv(idflight:number, iduser:number){
    console.log("idflight"+idflight+"iduser"+iduser);
    //this._route.navigate(['/addreserv']);
  }


  addUser(){
    this._route.navigate(['adduser']);
  }




  
}
