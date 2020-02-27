import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../models/todo-item.interface';

@Component({
  selector: 'demo-todo-item-card',
  templateUrl: './todo-item-card.component.html',
  styleUrls: ['./todo-item-card.component.scss']
})
export class TodoItemCardComponent implements OnInit {

  constructor() { }

  @Input() todoItem: TodoItem;

  ngOnInit(): void {
  }

}
