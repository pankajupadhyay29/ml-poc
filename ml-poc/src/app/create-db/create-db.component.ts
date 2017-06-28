import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-create-db',
  templateUrl: './create-db.component.html',
  styleUrls: ['./create-db.component.css']
})
export class CreateDbComponent implements OnInit {
  // @Input() rows: Array<Object>;
  databases = [
    {value: 'Database-0', viewValue: 'DB-1'},
    {value: 'Database-1', viewValue: 'DB-2'},
    {value: 'Database-2', viewValue: 'DB-3'}
  ];
  constructor() { }
  
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }


  ngOnInit() {
    // console.log(this.rows);
}


}
