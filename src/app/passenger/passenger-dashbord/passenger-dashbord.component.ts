import { Component, OnInit } from '@angular/core';
import { Ipass } from 'src/app/shared/models/passenger';
import { PassengerService } from 'src/app/shared/service/passenger.service';

@Component({
  selector: 'app-passenger-dashbord',
  templateUrl: './passenger-dashbord.component.html',
  styleUrls: ['./passenger-dashbord.component.scss']
})
export class PassengerDashbordComponent implements OnInit {
   passenger:Array<Ipass>=[]
   
  constructor(
    private _passengerService:PassengerService
  ) { }

  ngOnInit(): void {
    this.fetchAllpass()
  }

  fetchAllpass(){
   this._passengerService.fetchAll()
      .subscribe({
        next:res=>{
          console.log(res)
          this.passenger=res
        },
        error:err=>{
          console.log(err)
        }
      })
  }

}
