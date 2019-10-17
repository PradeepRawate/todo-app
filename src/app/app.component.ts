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
  todoList: ToDo[] = [];

  @ViewChild(TodoComponent) todoComp: TodoComponent;

  newTodoItem() {
    this.todoList.push(new ToDo(this.title, this.description));
    this.title = this.description = null;
  }

  markAsDone(itemObject: any) {
    console.log('item completed: ', itemObject.item);
  }

  removeItem(itemObject: any) {
    console.log('item removed: ', itemObject.item);
    this.todoList.splice(itemObject.index, 1);
  }

}
