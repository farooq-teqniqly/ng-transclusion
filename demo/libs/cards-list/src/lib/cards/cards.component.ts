import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'demo-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  @Input() cardRef: TemplateRef<any>;
  @Input() data: any;

  ngOnInit(): void {
  }

}
