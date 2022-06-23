import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddreservComponent } from './addreserv/addreserv.component';
import { AppComponent } from './app.component';
//import { AppuserComponent } from './appuser/appuser.component';
import {FlightlistComponent} from './worklist/flightlist.component';
import { LoguserComponent } from './loguser/loguser.component';
import { ReguserComponent } from './reguser/reguser.component';
// import { WorklistComponent } from './worklist/worktlist.component';

const routes: Routes = [
  //{path:'',component:AppComponent},
  //{path:'addreserv',component:AddreservComponent},
  {path: '', component:FlightlistComponent},
  // {path: 'worklistComponent', component:worklistComponent},
  {path: 'reguser', component:ReguserComponent},
  {path: 'viewflightlist', component:FlightlistComponent},
  //{path: 'adduser', component:AppuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
