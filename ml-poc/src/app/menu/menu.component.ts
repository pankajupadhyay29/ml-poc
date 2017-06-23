import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'side-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuList:Array<string> = [];
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    console.log('menu initiated')
    this.menuList = this.menuService.getMenus();
    
  }

}
