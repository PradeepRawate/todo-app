import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from './todo-model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todoList: ToDo[];

  @Output() itemRemoved = new EventEmitter();

  @Output() itemCompleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  markAsDone(item: ToDo, index: number) {
    item.isDone = true;
    this.itemCompleted.emit({index, item});
  }

  removeItem(item: ToDo, index: number) {
    this.itemRemoved.emit({index, item});
  }



}
