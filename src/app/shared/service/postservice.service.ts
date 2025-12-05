
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from '../models/post';


@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  //  post_Url=`${environment.base_Url}`
  postArr=[
    {
      title:"angular",
      body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aperiam iste, vel cum dolor doloremque alias aliquam autem. Error, et quasi! Omnis alias quaerat dignissimos reiciendis culpa odio, corrupti delectus.",
      id:"1"
    },
    {
      title:"sass",
      body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aperiam iste, vel cum dolor doloremque alias aliquam autem. Error, et quasi! Omnis alias quaerat dignissimos reiciendis culpa odio, corrupti delectus.",
      id:"1"
    },
    {
      title:"flex",
      body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aperiam iste, vel cum dolor doloremque alias aliquam autem. Error, et quasi! Omnis alias quaerat dignissimos reiciendis culpa odio, corrupti delectus.",
      id:"1"
    },
    {
      title:"javascript",
      body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aperiam iste, vel cum dolor doloremque alias aliquam autem. Error, et quasi! Omnis alias quaerat dignissimos reiciendis culpa odio, corrupti delectus.",
      id:"4"
    },
  ]
   
  constructor(
    
  ) { }

  fetchallpost():Observable<Array<Ipost>>{
    return of(this.postArr)
  }


  createNewPost(post:Ipost){
   this.postArr.push(post)
  }

  removepost(id:string){
     let getIndex=this.postArr.findIndex(post=>post.id===id)
    console.log(getIndex)
    this.postArr.splice(getIndex, 1)
  }



 
}
