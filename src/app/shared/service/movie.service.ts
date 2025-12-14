import { Injectable } from '@angular/core';
import { Imovie } from '../models/movie';
import { Observable, of } from 'rxjs';
import { movies } from '../const/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
   movieArr:Array<Imovie>=movies

  constructor(

  ) { }

  fetchAllmovie():Observable<Array<Imovie>>{
    return  of(this.movieArr)  
  }

  Addmovie(movie:Imovie){
     this.movieArr.push(movie)
  }
}
