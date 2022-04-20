import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../Todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // public todos : Observable<Todo[]>;
  private url: string = "/assets/Data/todos.json";
  constructor(private http: HttpClient) { 
    
  }

  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.url);
  }
  
}
