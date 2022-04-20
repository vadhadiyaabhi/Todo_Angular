import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AsapScheduler } from 'rxjs/internal/scheduler/AsapScheduler';
import { TodoService } from 'src/app/MyServices/todo.service';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  todos: Todo[];
  localItem: string;
  constructor(private todoService: TodoService) {
    this.localItem = localStorage.getItem("todos") || '';
    if(this.localItem == ''){
      this.todos = [];
    }else{
      this.todos = JSON.parse(this.localItem);
    }
    console.log(typeof(this.todos));

   }

  ngOnInit(): void {
    //this.todoService.getTodos().subscribe(data => this.todos = data);
    //console.log(this.todos);
  }

  deleteTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  addNewTodo(todo: Todo){
    todo.sno = this.todos.length + 1;
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  completeTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = false;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
