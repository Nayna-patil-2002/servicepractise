import { Component, OnInit } from '@angular/core';
import { TableService } from '../../service/table.service';
import { Isubject } from '../../models/tabel';
import { SnackabarService } from '../../service/snackabar.service';
import { IsFocusableConfig } from '@angular/cdk/a11y';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
   subjectobj:Array<Isubject>=[]
  constructor(
    private _tableservice:TableService,
    private _snackbarService:SnackabarService,
  ) { }
  
  ngOnInit(): void {
   this.fetchAllSub()
  }

  fetchAllSub(){
    this._tableservice.fetchAllSub()
    .subscribe({
      next:res=>{
        console.log(res)
        this.subjectobj=res
      },
      error:err=>{
        console.log(err)
      }
    })
  }

  onRemove(subject:Isubject){
  let getConfirm=confirm(`Are you sure you want to delete this subject?`)
  if(getConfirm){
    console.log(subject)
    this._tableservice.remove(subject)
    this._snackbarService.Opensnackbar(`This ${subject.name} is removed succesfully.`)
  }
  }

  onEdit(subject:Isubject){
    console.log(subject)
    this._tableservice.editSub$.next(subject)
  }

}
