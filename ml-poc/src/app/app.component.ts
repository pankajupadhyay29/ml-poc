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
  {text: 'Content', cols: 11, rows: 9, color: 'lightpink'},
];
}
