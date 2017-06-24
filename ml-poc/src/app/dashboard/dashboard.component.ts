import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  contents = [];
  constructor() { 
    
   this.contents = [
{text: 'Content1', cols: 6, rows: 5, color: 'lightpink'},
  {text: 'Content2', cols: 5, rows: 3, color: 'lightpink'},
  {text: 'Content3', cols: 5, rows: 3, color: 'lightpink'},
  {text: 'Content4', cols: 6, rows: 4, color: 'lightpink'},
  {text: 'Content5', cols: 5, rows: 3, color: 'lightpink'}
];

  }

  ngOnInit() {
    console.log('dashboard initiated');
  }

}
