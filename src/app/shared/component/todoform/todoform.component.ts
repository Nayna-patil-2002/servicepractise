import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UniqService } from '../../service/uniq.service';
import { TodoService } from '../../service/todo.service';
import { Itodo } from '../../models/todo';
import { SnackabarService } from '../../service/snackabar.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
  todoForm!:FormGroup
  IsinEditMode:boolean=false;
  editobj!:Itodo;
  constructor(
     private _unic:UniqService,
     private _todoservice:TodoService,
     private _sanackbar:SnackabarService
  ) { }

  ngOnInit(): void {
   this.createTodoForm()
   this.editTodo()

  }

  createTodoForm(){
    this.todoForm=new FormGroup({
      item:new FormControl(null, [Validators.required])
    })
  }

  onTodoAdd(){
    
    if(this.todoForm.valid){
      let todoobj:Itodo={...this.todoForm.value,
      id:this._unic.Uuid() 
    }
       console.log(todoobj)
       this._todoservice.createnewtodo(todoobj)
       this._sanackbar.Opensnackbar(`This ${todoobj.item} added succesfully.`)
       this.todoForm.reset()
      
    }


   
  }

  editTodo(){
   this._todoservice.editTodo$
     .subscribe({
      next:res=>{
        console.log(res)
        this.editobj=res
        this.IsinEditMode=true
        this.todoForm.patchValue(res)
         
      },
      error:err=>{
        console.log(err)
      }
     })
  }

  onUpdateTodo(){
    if(this.todoForm.valid){
      let updateObj={...this.todoForm.value,
        id:this.editobj.id
      }
      console.log(updateObj)
      this._todoservice.updateObj(updateObj)
      this.todoForm.reset()
      this._sanackbar.Opensnackbar(`This ${updateObj.item} updated succesfully.`)
      this.IsinEditMode=false
    }
  }

  
}
