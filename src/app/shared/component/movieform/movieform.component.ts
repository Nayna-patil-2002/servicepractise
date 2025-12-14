import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UniqService } from '../../service/uniq.service';

@Component({
  selector: 'app-movieform',
  templateUrl: './movieform.component.html',
  styleUrls: ['./movieform.component.scss']
})
export class MovieformComponent implements OnInit {
  movieForm!:FormGroup
  constructor(
    private _uuid:UniqService,
   

    
  ) { }

  ngOnInit(): void {
    this.createForm()
  }


  createForm(){
  this.movieForm=new FormGroup({
    name:new FormControl(null, [Validators.required]),
    image:new FormControl(null, [Validators.required]),
    rating:new FormControl(null, [Validators.required]),
  })
  }

  addMovie(){
    if(this.movieForm.valid){
      let obj={...this.movieForm.value, id:this._uuid.Uuid()}

      console.log(obj)
    }
  }

}
