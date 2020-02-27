import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../models/todo-item.interface';

@Component({
  selector: 'demo-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.scss']
})
export class TodoItemListComponent implements OnInit {

  todos: TodoItem[] = [];

  constructor() {
    this.todos = [
      { name: 'Eat', content: 'East something.'},
      { name: 'Study', content: 'Study for test.'},
      { name: 'Groceries', content: 'Go to Safeway.'}
    ];
  }

  ngOnInit(): void {
  }

}
