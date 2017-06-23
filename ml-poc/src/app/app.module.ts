import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {DataTableModule,SharedModule} from 'primeng/primeng';     //accordion and accordion tab
//import {MenuItem} from 'primeng/primeng';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NgxTableComponentComponent, DialogResultExampleDialog } from './ngx-table-component/ngx-table-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NgxTableComponentComponent,
    DialogResultExampleDialog
    // DataTableModule,
    // SharedModule
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    ModalModule.forRoot(),
    ModalModule,
    BootstrapModalModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent,DialogResultExampleDialog]
})
export class AppModule { }