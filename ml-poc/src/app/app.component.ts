import { NgxTableComponentComponent } from './ngx-table-component/ngx-table-component.component';


import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  providers: [Modal],
  
})
export class AppComponent {
  title = 'app';
  rows = [
       { DatabaseName: 'App Services', RelatedDatabases: 'Security', Forests: 'App Services', AppServers: 'Manage HTTP' },
       { DatabaseName: 'App Services', RelatedDatabases: 'Security', Forests: 'App Services', AppServers: 'Manage HTTP' },
       { DatabaseName: 'App Services', RelatedDatabases: 'Security', Forests: 'App Services', AppServers: 'Manage HTTP' }
     ];
    // 
  constructor(vcRef: ViewContainerRef, public modal: Modal, Overlay: Overlay) {
    // modal.overlay.defaultViewContainer = vcRef;
  }
   
  
}
