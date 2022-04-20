import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../Todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public obsTodos : Observable<Todo[]>;
  public todos: Todo[];
  private localItem : string;
  private url: string = "/assets/Data/todos.json";
  constructor(private http: HttpClient) { 
    this.localItem = localStorage.getItem("todos") || "";
    if(this.localItem == ''){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
  }

  getTodos(): Todo[]{
    //return this.http.get<Todo[]>(this.url);
    return this.todos;
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  deleteTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  completeTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = false;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  
}
