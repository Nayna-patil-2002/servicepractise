import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../models/post';
import { PostserviceService } from '../../service/postservice.service';
import { SnackabarService } from '../../service/snackabar.service';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss']
})
export class PostcardComponent implements OnInit {
  postArr:Array<Ipost>=[]
  constructor(
    private _postservice:PostserviceService,
    private _snackabar:SnackabarService
  ) { }

  ngOnInit(): void {
    this.fetchAllpost()
  }

  fetchAllpost(){
   this._postservice.fetchallpost()
     .subscribe({
      next:data=>{
        console.log(data)
        this.postArr=data
      },
      error:err=>{
        console.log(err)
      }
     })
  }


  onRemove(id:string){
   let getconfirm=confirm("Are you sure you want to remove this post?")

   if(getconfirm){
    console.log(id)
     this._postservice.removepost(id)
     this._snackabar.Opensnackbar(`This id ${id} removed succesfully.`)
   }
  }

}
