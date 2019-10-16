import { Component, OnInit } from '@angular/core';
import { ToDo } from './todo-model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: ToDo[] = [];

  constructor() { }

  ngOnInit() {
    this.todoList.push(new ToDo('Title1', 'Description', 'TimeStamp'));
    this.todoList.push(new ToDo('Title2', 'Description', 'TimeStamp'));
    this.todoList.push(new ToDo('Title3', 'Description', 'TimeStamp'));
    this.todoList.push(new ToDo('Title4', 'Description', 'TimeStamp'));
  }

}
