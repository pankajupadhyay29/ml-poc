import { Component } from '@angular/core';

import { MenuComponent } from './menu/menu.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tiles = [
  {text: 'Top', cols: 12, rows: 1, color: 'lightblue'},
  {text: 'Menu', cols: 1, rows: 9, color: 'lightgreen' },
  {text: 'Content1', cols: 6, rows: 5, color: 'lightpink'},
  {text: 'Content2', cols: 5, rows: 3, color: 'lightpink'},
  {text: 'Content3', cols: 5, rows: 3, color: 'lightpink'},
  {text: 'Content4', cols: 6, rows: 4, color: 'lightpink'},
  {text: 'Content5', cols: 5, rows: 3, color: 'lightpink'}
];
}
