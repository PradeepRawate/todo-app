import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from './todo-model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: ToDo[] = [];
  completedList: ToDo[] = [];

  constructor() { }

  ngOnInit() {
  }

  addItem(item: ToDo) {
    this.todoList.push(item);
  }

  markAsDone(item: ToDo, index: number) {
    this.todoList.splice(index, 1);
    this.completedList.push(item);
  }



}
