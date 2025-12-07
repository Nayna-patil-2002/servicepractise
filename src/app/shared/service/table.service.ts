import { Injectable } from '@angular/core';
import { tableArray } from '../const/table';
import { Isubject } from '../models/tabel';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
subjectArr:Array<Isubject>=tableArray
  constructor() { }

  editSub$:Subject<Isubject>=new Subject()

  fetchAllSub(){
    return of(this.subjectArr)
  }

  createNew(sub:Isubject){
    this.subjectArr.push(sub)
  }

  remove(sub:Isubject){
    let getIndex=this.subjectArr.findIndex(s=>s.id===sub.id)
     console.log(getIndex)
     this.subjectArr.splice(getIndex, 1)
  }

  onUpdate(sub:Isubject){
   let getIndex=this.subjectArr.findIndex(s=>s.id===sub.id)
   this.subjectArr[getIndex]=sub
  }
}


