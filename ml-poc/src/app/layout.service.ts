import { Injectable } from '@angular/core';

@Injectable()
export class LayoutService {
   tiles = [
    {text: 'Top', cols: 12, rows: 1, color: 'lightblue'},
    {text: 'Menu', cols: 1, rows: 8, color: 'lightgreen' },
    {text: 'Content', cols: 11, rows: 8, color: 'lightpink'},
  ];

  widgets = [];
  constructor() { }

  getMainLayout(){
   return this.tiles;
  }

  getWidgetLayout(){
    return this.widgets;
  }

}
