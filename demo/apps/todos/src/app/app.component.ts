import { Component } from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todos';

  todos = [
    { name: 'Eat', content: 'East something.'},
    { name: 'Study', content: 'Study for test.'},
    { name: 'Groceries', content: 'Go to Safeway.'}
  ];
}
