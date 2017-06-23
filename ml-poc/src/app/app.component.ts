import { NgxTableComponentComponent } from './ngx-table-component/ngx-table-component.component';
//import {DataTableModule,SharedModule} from 'primeng/primeng';


import { Component, ViewContainerRef, ViewEncapsulation ,OnInit} from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { MlDbServicesService } from "app/ml-db-services.service";

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  providers: [Modal],
  
})
export class AppComponent implements OnInit{
 
  title = 'app';
  rows:any;
 

  constructor(private dbService:MlDbServicesService) {
  }

   ngOnInit(): void {
      this.rows = [
       { DatabaseName: 'App ervices', RelatedDatabases: 'Security', Forests: 'App Services', AppServers: 'Manage HTTP' },
       { DatabaseName: 'App Serices', RelatedDatabases: 'Security', Forests: 'App Services', AppServers: 'Manage HTTP' },
       { DatabaseName: 'pp Services', RelatedDatabases: 'Security', Forests: 'App Services', AppServers: 'Manage HTTP' }
     ];
    this.getdatabases();
  }
   
  getdatabases(){
    this.dbService.getDbList().subscribe(result=>{
      console.log(result);
     // this.rows = result;
      //console.log(this.rows);
    });
    
  }
}
