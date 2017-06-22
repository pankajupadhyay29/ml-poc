import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NgxTableComponentComponent } from './ngx-table-component/ngx-table-component.component';


@NgModule({
  imports: [ 
    BrowserModule, 
    NgbModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    NgxDatatableModule
  ],
  declarations: [ AppComponent, NgxTableComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }