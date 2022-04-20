import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/MyServices/todo.service';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.css']
})
export class CompletedTodosComponent implements OnInit {

  @Input() i: number;
  @Input() todo: Todo;
  @Output() deleteTodo : EventEmitter<Todo> = new EventEmitter();
  todos: Todo[];
  localItem: string;
  constructor(private todoService: TodoService) {
    // this.localItem = localStorage.getItem("todos") || '';
    // if(this.localItem === ''){
    //   this.todos = [];
    // }
    // else{
    //   this.todos = JSON.parse(this.localItem);
    // }
   }

  ngOnInit(): void {
    // this.todoService.getTodos().subscribe((data: Todo[]) => 
    // {
    //   this.todos = data
    // });
    this.todos = this.todoService.getTodos();
  }


  onClick(todo: Todo){
    console.log(todo);
    // const index =  this.todos.indexOf(todo);
    // if(index > -1){
    //   this.todos.splice(index, 1);
    //   localStorage.setItem("todos", JSON.stringify(this.todos))
    // }
    this.todoService.deleteTodo(todo);
  }
}
