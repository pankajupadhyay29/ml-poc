import { Injectable } from '@angular/core';

@Injectable()
export class LayoutService {
   tiles = [
    {text: 'Top', cols: 12, rows: 1, color: 'lightblue'},
    {text: 'Menu', cols: 1, rows: 8, color: 'lightgreen' },
    {text: 'Content', cols: 11, rows: 8, color: 'lightpink'},
  ];

  widgets = [
    {id:0, title: 'Request Rate Trend', height: 2, width: 1, settings:{}},
    {id:1, title: 'DB Availability Trend', height: 2, width: 1, settings:{}},
    {id:2, title: 'Memory Uses(Top 5)', height: 2, width: 1, settings:{}},
    {id:3, title: 'Recent', height: 1, width: 1, settings:{}},
    {id:4, title: 'Quick Links', height: 1, width: 1, settings:{}},
  ];
  constructor() { }

  getMainLayout(){
   return this.tiles;
  }

  getWidgetLayout(){
    return this.widgets;
  }

}
