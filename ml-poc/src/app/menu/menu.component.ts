import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'side-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menuList: Array<Object>;
  @Output() menuToggle = new EventEmitter();
  isExpended = false;
  
  constructor() { }

  ngOnInit(){
    
  }

  toggle(){
    this.isExpended = !this.isExpended;
    this.menuToggle.emit(this.isExpended)
  }

}
