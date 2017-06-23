import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdGridList, MdGridTile } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { MenuService } from './menu.service';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    MdGridList,
    MdGridTile,
    ProductComponent,
    MembersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot([
      {
      path: 'member',
      component: MembersComponent
    },
    {
      path: 'product',
      component: ProductComponent
    }
    


    ])
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
