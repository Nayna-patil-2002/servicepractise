import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Itodo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   todoarr:Array<Itodo>=[
      {
        id:'1',
        item:"javascript"
      },
      {
        id:'2',
        item:"angular"
      },
      {
        id:'3',
        item:"html"
      },
      {
        id:'4',
        item:"flex"
      },
  
     ]
  constructor() { }

   fetchAllTodo():Observable<Array<Itodo>>{
   return of(this.todoarr) 
  }

  createnewtodo(todo: Itodo) {
  this.todoarr.push(todo);
 }

 removetodo(id:string){
    
    let getIndex=this.todoarr.findIndex(todo=>todo.id===id)
    console.log(getIndex)
    this.todoarr.splice(getIndex, 1)
 }
}
