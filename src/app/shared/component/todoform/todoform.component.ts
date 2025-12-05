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
  constructor(
     private _unic:UniqService,
     private _todoservice:TodoService,
     private _sanackbar:SnackabarService
  ) { }

  ngOnInit(): void {
   this.createTodoForm()
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

  
}
