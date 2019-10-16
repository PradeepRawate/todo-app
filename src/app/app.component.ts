import { Component, ViewChild } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { ToDo } from './todo/todo-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  description: string;

  @ViewChild(TodoComponent) todoComp: TodoComponent;

  newTodoItem() {
    this.todoComp.addItem(new ToDo(this.title, this.description));
  }

}
