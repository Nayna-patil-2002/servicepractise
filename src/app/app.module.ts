import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import{HttpClientModule} from "@angular/common/http";
import { TodoComponent } from './shared/component/todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module';
import { TodoformComponent } from './shared/component/todoform/todoform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostcardComponent } from './shared/component/postcard/postcard.component';
import { PostformComponent } from './shared/component/postform/postform.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoformComponent,
    PostcardComponent,
    PostformComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
