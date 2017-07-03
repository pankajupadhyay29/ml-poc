import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-forest',
  templateUrl: './create-forest.component.html',
  styleUrls: ['./create-forest.component.css']
})
export class CreateForestComponent implements OnInit {
  content = '+ See More';
  toggleContent() {
     if( this.content === '+ See More') {
       this.content = '- See Less';
     } else {
       this.content = '+ See More';
     }
   }
  constructor() { }

  ngOnInit() {
  }

}
