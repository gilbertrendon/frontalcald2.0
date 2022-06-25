import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Reserv} from './reserv';
import { User } from './user';
import { Work } from './work';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }

  //Para lo referente a las tareas
  fetchWorktListFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:8081/getworklist/");
  }

  //Para añadir una taréa
  addWork( work:Work):Observable<any>{
    return this._http.post<any>("http://localhost:8081/addwork", work);
  }

  //Para borrar tarea
  deleteWork(id: number):Observable<any>{
    console.log("asdfasdfasdf");
    return this._http.delete<any>("http://localhost:8081/deleteworkbyid/1");
  }
  //fin tareas

  fetchFlightListFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:8088/getflightlist/");
  }
    
  addReservToRemote( reserv: Reserv):Observable<any>{
    return this._http.post<any>("http://localhost:8088/addreserv", reserv);
  }

  addUserToRemote( user:User):Observable<any>{
    console.log(user);
    return this._http.post<any>("http://localhost:8088/adduser", user);
  }
}
