import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdGridList, MdGridTile } from '@angular/material';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MdGridList,
    MdGridTile,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
