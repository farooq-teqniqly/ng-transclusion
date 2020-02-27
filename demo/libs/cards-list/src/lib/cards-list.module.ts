import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardsComponent, ListComponent],
  exports: [CardsComponent, ListComponent]
})
export class CardsListModule {}
