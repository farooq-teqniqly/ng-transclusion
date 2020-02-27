import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'demo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  @Input() listRef: TemplateRef<any>;
  @Input() data: any;

  ngOnInit(): void {
  }

}
