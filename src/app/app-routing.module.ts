import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedTodosComponent } from './MyComponents/completed-todos/completed-todos.component';
import { ToDosComponent } from './MyComponents/to-dos/to-dos.component';

const routes: Routes = [
  {path: '', component: ToDosComponent},
  {path: 'completed', component: CompletedTodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
