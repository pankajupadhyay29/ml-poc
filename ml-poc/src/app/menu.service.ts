import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  getMenus(){
    //This could be a service call for dynamic menus
    return ['Home', 'Database', 'Group', 'Hosts', 'Forest', 'MIME Type', 'Security'];
  }

}
