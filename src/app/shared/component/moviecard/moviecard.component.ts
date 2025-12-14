import { Component, OnInit } from '@angular/core';
import { Imovie } from '../../models/movie';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {
  movieObj:Array<Imovie>=[]  
 

  constructor(
    private _movieservice:MovieService
  ) { }

  ngOnInit(): void {
   this.fetchall()
  }

  fetchall(){
   this._movieservice.fetchAllmovie()
   .subscribe({
    next:res=>{
      console.log(res)
      this.movieObj=res
    },
    error:err=>{
      console.log(err)
    }
   })
  }

}
