import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../models/todo-item.interface';

@Component({
  selector: 'demo-todo-item-list-row',
  templateUrl: './todo-item-list-row.component.html',
  styleUrls: ['./todo-item-list-row.component.scss']
})
export class TodoItemListRowComponent implements OnInit {

  constructor() { }

  @Input() todoItem: TodoItem;

  ngOnInit(): void {
  }

}
