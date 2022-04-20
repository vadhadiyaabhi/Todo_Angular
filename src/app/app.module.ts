import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDosComponent } from './MyComponents/to-dos/to-dos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { AddTodosComponent } from './MyComponents/add-todos/add-todos.component';
import { FormsModule } from '@angular/forms';
import { CompletedTodosComponent } from './MyComponents/completed-todos/completed-todos.component';
import { TodoService } from './MyServices/todo.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    TodoItemComponent,
    AddTodosComponent,
    CompletedTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
