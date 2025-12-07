import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UniqService } from '../../service/uniq.service';
import { TableService } from '../../service/table.service';
import { Isubject } from '../../models/tabel';
import { SnackabarService } from '../../service/snackabar.service';

@Component({
  selector: 'app-tableform',
  templateUrl: './tableform.component.html',
  styleUrls: ['./tableform.component.scss']
})
export class TableformComponent implements OnInit {
  subForm!:FormGroup
  isIneditMode:boolean=false;
  editObj!:Isubject;
  constructor(
    private _uniq:UniqService,
    private _tableServicce:TableService,
    private _snackbar:SnackabarService,
  ) { }

  ngOnInit(): void {
    this.createSubForm(),
    this.onedit()
  }

  createSubForm(){
    this.subForm=new FormGroup({
      name:new FormControl(null, [Validators.required]),
      category:new FormControl(null, [Validators.required]),
      level:new FormControl(null, [Validators.required]),
    })
  }

  onSubAdd(){
    if(this.subForm.valid){
    let subObj=  {...this.subForm.value,
        id:this._uniq.Uuid() }
        console.log(subObj)
        this._tableServicce.createNew(subObj)
        this.subForm.reset()
        this._snackbar.Opensnackbar(`This ${subObj.name} added succesfully.`)
    }
    
  }

  onedit(){
   this._tableServicce.editSub$
   .subscribe({
    next:res=>{
      console.log(res)
      this.editObj=res;
      this.subForm.patchValue(res)
      this.isIneditMode=true
    },
    error:err=>{
      console.log(err)
    }
   })
  }

  onUpdate(){
   if(this.subForm.valid){
    let updateobj={
      ...this.subForm.value,
      id:this.editObj.id
    }
    this._tableServicce.onUpdate(updateobj)
    this.isIneditMode=false
    this.subForm.reset()
      this._snackbar.Opensnackbar(`This ${updateobj.name} updated succesfully.`)
   }
  }

}
