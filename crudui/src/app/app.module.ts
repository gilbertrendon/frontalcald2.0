import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AppuserComponent } from './appuser/appuser.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { FlightlistComponent } from './worklist/flightlist.component';
import { AddreservComponent } from './addreserv/addreserv.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoguserComponent } from './loguser/loguser.component';
import { ReguserComponent } from './reguser/reguser.component';
import { AddworkComponent } from './addwork/addwork.component';
// import { WorklistComponent } from './worklist/worktlist.component';
@NgModule({
  declarations: [
    AppComponent,
   // AppuserComponent,
    UpdateflightComponent,
    FlightlistComponent,
    AddreservComponent,
    LoguserComponent,
    ReguserComponent,
    AddworkComponent
    // ,WorklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
