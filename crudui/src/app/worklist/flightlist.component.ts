import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import {UserService} from "../services/user.service";
import { WorkService } from '../services/work.service';
import {User} from "../user";
import {Flight} from "../flight";
import {Work} from "../work";
import { ReservService } from '../services/reserv.service';
import { Reserv } from '../reserv';


@Component({
  selector: 'app-flightlist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./flightlist.component.css'],
  providers: [UserService, WorkService],
})
export class FlightlistComponent implements OnInit {
  //, private _route:Route
  constructor(public reservService:ReservService,public userService:UserService,
     private _service:NgserviceService, private _route:Router,
     public workService:WorkService) { }

  _flightList: Flight[];
  _reservist: Reserv[];
  _workList: Work[];
 
  _user = new User();
  _valid = 0; 
  //Va a ser igual a el siguiente elemento de la lista de reservas
  ngOnInit(): void {
    // window.location.reload();
    this.getWorks();
    this._service.fetchWorktListFromRemote().subscribe(
      data=>{
              console.log("Response received");
              this._workList=data;
      }
    )
  }

  getWorks(){
    this.workService.getWorks().subscribe((res) =>{
      this.workService.works = res;
    });
  }

  //Para borrar tarea
  deleteWork(id: number){
    this._service.deleteWork(id).subscribe(
      data=>{
        console.log("deleted succesfully");
      },
      error => console.log("Exception ocurred")
    )
    window.location.reload();
  }
  
  //NOTA: es posible que el arreglo users no devuelva elementos debido a que la lógica es complicada de entender
  getUsers(){
    this.userService.getUsers().subscribe((res) =>{
      this.userService.users = res;
    });
  }

  getReservs(){
    this.reservService.getReservs().subscribe((res) =>{
      this.reservService.reservs = res;
      this._reservist = res;
    })
  }
 
  addUser(){
    this._route.navigate(['adduser']);
  }

  addWork(){
    this._route.navigate(['addwork']);
  }

  updateWork(id:number,status: String,date: String,
     retdays: number,empAsign: number){
    this._route.navigate(['updatework/'+id+'/'+status+'/'+date
    +'/'+retdays+'/'+empAsign]);
    
    this.getWorks();
    let _longworks;
    if(this.workService.works == undefined || this.workService.works == null ){
      _longworks = 0;
    }else{
      _longworks = Object.keys(this.workService.works).length;
      console.log("***************************************")
      console.log(this._workList)
    }




    //Obtengo el listado de las reservas
    //si al menos hay una reserva se mira si es la del id que 
    // //estoy buscando
    // Ssi si es la que estoy buscando mando los datos como parámetro 
    // para abrir la vista de editar work
  }


   //Para hacer las reservas
   reservFlight(idflight:number){
    this.getReservs();
     let _longeservs = 0;
  
    //el id reserva creo que sino se manda nada lo pone automático
    if( _longeservs == 0){
      let _reserv = new Reserv();
      _reserv.idreserv = _longeservs+1;
      _reserv.idflight = idflight;
      _reserv.iduser = this._user.id;
      _reserv.valid = 1;//Debido a que es la primera inserción
            this.reservService.postReserv(_reserv).subscribe(
      data=>
            {
             console.log("data added succesfully");
             //this._route.navigate(['']) ;
            },
            
            error=>console.log("error")
    )
    //this._route.navigate(['']) 
    }else{
      for(let i in this._flightList){
        console.log("idflight"+this._flightList[i]["idflight"]+"idflightINSERTADO"+idflight);
        if(this._flightList[i][idflight] == idflight){
          //if()
          console.log("encontré el vuelo al que le voy a hacer reserva");
        }
      }
    }

    this._valid = 0;
    console.log("idflight"+idflight+"iduser"+this._user.id);
  }

}
