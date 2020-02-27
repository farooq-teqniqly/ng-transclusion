import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { ListComponent } from './list/list.component';
import { CardsListComponent } from './cards-list/cards-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardsComponent, ListComponent, CardsListComponent],
  exports: [CardsComponent, ListComponent, CardsListComponent]
})
export class CardsListModule {}
