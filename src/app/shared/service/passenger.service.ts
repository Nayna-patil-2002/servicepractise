import { Injectable } from '@angular/core';
import { Ipass } from '../models/passenger';
import { passengerArr } from '../const/passenger';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
    passengerObj:Array<Ipass>=passengerArr
  constructor() { }

  fetchAll():Observable<Ipass[]>{
    return of(this.passengerObj)
  }

  updatePass(passenger:Ipass){
    let updateObj=this.passengerObj.findIndex(f=>f.id===passenger.id)
    this.passengerObj[updateObj]=passenger
  }

  removePass(passenger:Ipass){
    let getIndex=this.passengerObj.findIndex(f=>f.id===passenger.id)

    this.passengerObj.splice(getIndex, 1)
  }
}
