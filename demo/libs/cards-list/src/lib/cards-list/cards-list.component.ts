import { Component, OnInit, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'demo-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  constructor() { }

  @Input() listRef: TemplateRef<any>;
  @Input() cardRef: TemplateRef<any>;
  @Input() data: any;

  displayMode: string;

  ngOnInit(): void {
  }

  showCards(): void {
    this.displayMode = "cards"
  }

  showList(): void {
    this.displayMode = "list"
  }

}
