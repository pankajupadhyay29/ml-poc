import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import {NgForm} from '@angular/forms';
import { Http, Response } from "@angular/http";

@Component({
  selector: 'app-create-db',
  templateUrl: './create-db.component.html',
  styleUrls: ['./create-db.component.css']
})
export class CreateDbComponent implements OnInit {
  content = '+ See More';  
  // @Input() rows: Array<Object>;
  private service_url = "http://localhost:3000/";
  databases = [
    {value: 'Database-0', viewValue: 'DB-1'},
    {value: 'Database-1', viewValue: 'DB-2'},
    {value: 'Database-2', viewValue: 'DB-3'}
  ];
 // or minus if you want that first

   toggleContent() {
     if(this.content === '+ See More') {
       this.content = '- See Less';
     } else {
       this.content = '+ See More';
     }
   }




  constructor(private http: Http) { }
  
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }


  ngOnInit() {   

    // console.log(this.rows);
}

  createData() {
    this.http.post(this.service_url,'createDb')
        .subscribe(
            () => {alert('successfully.')},
           err =>console.error(err)
       );
  }

}
