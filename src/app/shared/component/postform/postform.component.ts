import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UniqService } from '../../service/uniq.service';
import { PostserviceService } from '../../service/postservice.service';
import { SnackabarService } from '../../service/snackabar.service';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.scss']
})
export class PostformComponent implements OnInit {
  postForm!:FormGroup
  constructor(
    private _uniq:UniqService,
    private _postservice:PostserviceService,
    private _snackbar:SnackabarService
  ) { }

  ngOnInit(): void {
    this.creteForm()
  }

  creteForm(){
    this.postForm=new FormGroup({
      title:new FormControl(null,[Validators.required]),
      body:new FormControl(null, [Validators.required]),
      //  userId:new FormControl(null, [Validators.required]),
    })
  }

  onPostAdd(){
    if(this.postForm.valid){
      let postObj={
        ...this.postForm.value,
        id:this._uniq.Uuid()
      }

      this._postservice.createNewPost(postObj)
      this.postForm.reset()
      this._snackbar.Opensnackbar(`This ${postObj.title} added succesfully.`)
      console.log(postObj)
    }
  }

}
