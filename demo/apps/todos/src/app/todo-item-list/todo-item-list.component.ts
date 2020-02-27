import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../models/todo-item.interface';

@Component({
  selector: 'demo-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.scss']
})
export class TodoItemListComponent implements OnInit {

  constructor() {
  }

  @Input() todos: TodoItem[];

  ngOnInit(): void {
  }

}
