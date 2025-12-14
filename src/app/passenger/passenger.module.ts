import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashbordComponent } from './passenger-dashbord/passenger-dashbord.component';
import { PassengerCountComponent } from './passenger-count/passenger-count.component';
import { PassengercardComponent } from './passengercard/passengercard.component';
import {MatCardModule} from '@angular/material/card';
import { MaterialModule } from '../material/material.module';
import { PassengercountComponent } from './passengercount/passengercount.component';
import { MatDiaologComponent } from './mat-diaolog/mat-diaolog.component';
import { GetconfirmComponent } from './getconfirm/getconfirm.component';


@NgModule({
  declarations: [
    PassengerDashbordComponent,
    PassengerCountComponent,
    PassengercardComponent,
    PassengercountComponent,
    MatDiaologComponent,
    GetconfirmComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MaterialModule
  ],
  exports:[
    PassengerDashbordComponent,
     PassengerCountComponent,
     PassengercardComponent
  ]
})
export class PassengerModule { }
