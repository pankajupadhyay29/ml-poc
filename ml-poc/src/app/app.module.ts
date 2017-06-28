import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule, MdDialogModule } from "@angular/material";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu.service';
import { LayoutService } from './layout.service';
import { DatabaseService } from './database.service';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatabaseComponent } from './database/database.component';
import { WidgetComponent } from './widget/widget.component';
import { NvD3Component } from 'ng2-nvd3';
import { CreateDbComponent } from './create-db/create-db.component';
import { ChartService } from "app/chart.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,      
    HeaderComponent,
    DashboardComponent,
    DatabaseComponent,
    WidgetComponent,
    NvD3Component,
    CreateDbComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    NgbModule,
    MaterialModule,
    FormsModule,
    NgxDatatableModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
      path: '',
      component: DashboardComponent
    },
    {
      path: 'database',
      component: DatabaseComponent
    },
    {
      path: 'create_database',
      component: CreateDbComponent
    }    
    ])
  ],
  providers: [MenuService, LayoutService, DatabaseService, ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
