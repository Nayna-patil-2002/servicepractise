import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Itodo } from '../../models/todo';
import { UniqService } from '../../service/uniq.service';
import { SnackabarService } from '../../service/snackabar.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoArr:Array<Itodo>=[]
  constructor(
    private _todoService:TodoService,
    private _unic:UniqService,
    private _snackbar:SnackabarService
  ) { }

  ngOnInit(): void {
   this.fetchtodo()

  }
  
  fetchtodo(){
    this._todoService.fetchAllTodo()
      .subscribe({
        next:res=>{
          console.log(res)
          this.todoArr=res
        },
        error:err=>{
          console.log(err)
        }
      })
  }

  onRemove(id:string){
   let getConfirm=confirm(`Are sure you want to remove todo.`)

   if(getConfirm){
     console.log(id)
   
       this._todoService.removetodo(id)
     
       this._snackbar.Opensnackbar(`These ${id} removed successfully.`)
   
   }
     
  }

  onEdit(todo:Itodo){
    console.log(todo)
   this._todoService.editTodo$.next(todo)
  }

}
