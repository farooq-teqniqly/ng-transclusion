import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TodoItemCardComponent } from './todo-item-card/todo-item-card.component';
import { TodoItemListComponent } from './todo-item-list/todo-item-list.component';
import { TodoItemListRowComponent } from './todo-item-list-row/todo-item-list-row.component';
import { CardsListModule } from '@demo/cards-list';

@NgModule({
  declarations: [AppComponent, TodoItemCardComponent, TodoItemListComponent, TodoItemListRowComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    CardsListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
