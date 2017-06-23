import { Component } from '@angular/core';
import { NgxTableComponentComponent } from './ngx-table-component/ngx-table-component.component';
//import {DataTableModule,SharedModule} from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rows = [
       { DatabaseName: 'App Services', RelatedDatabases: 'Security', Forests: 'App Services', AppServers: 'Manage HTTP' },
       { DatabaseName: 'App Services', RelatedDatabases: 'Security', Forests: 'App Services', AppServers: 'Manage HTTP' },
       { DatabaseName: 'App Services', RelatedDatabases: 'Security', Forests: 'App Services', AppServers: 'Manage HTTP' }
     ];

     Edit() :void{
       console.log('Edit');
     }
    // 
}
