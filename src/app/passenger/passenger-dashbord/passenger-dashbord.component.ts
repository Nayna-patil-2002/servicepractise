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
   checkInCount!:number
  constructor(
    private _passengerService:PassengerService
  ) { }

  ngOnInit(): void {
    this.fetchAllpass()
    this.getCheckInCount()
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

  getCheckInCount() {
  let arr = this.passenger.filter(pass => pass.checkedIn);
  this.checkInCount = arr.length;
}

getRemove(flag:boolean){
  this.getCheckInCount()
}
}
