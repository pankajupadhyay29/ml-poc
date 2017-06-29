import { Component,  OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {DatabaseService} from '../database.service';
import { MenuService } from '../menu.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
	temp: Array<Object>;
	menuList =  [];
  @Input() forestsList: Array<Object>;
 checkedForests = [];

  notVisible:boolean = true;
  visible:boolean = false;
constructor(public dialogRef: MdDialogRef<DialogComponent>, private dbService: DatabaseService, private menuService: MenuService) { }
  ngOnInit() {

  }

  onClick() {
  	this.dbService.getForests().subscribe(result=>{
      this.forestsList = result;
      this.temp = this.forestsList;
      console.log(this.forestsList);
      console.log('coming in dialog');

    });
  	this.visible = true;
  	this.notVisible = false;
  	   
  }

  	onBack() {
  	this.visible = false;
  	this.notVisible = true;
  }
  onCheck(check) {
    console.log('forest list: ',check);
   
   this.checkedForests.push(check);
  } 
  
  onDone() {
    //console.log(this.forests);
  }
  }

