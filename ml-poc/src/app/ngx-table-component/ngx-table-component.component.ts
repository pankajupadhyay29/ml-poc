import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-ngx-table-component',
  templateUrl: './ngx-table-component.component.html',
  styleUrls: ['./ngx-table-component.component.css']
})
export class NgxTableComponentComponent implements OnInit {
  @Input() rows: Array<Object>;
  @Input() columns: Array<Object>;


  constructor() { }

  ngOnInit() {
    console.log(this.rows);
  }

  OnAction():void{
    console.log('here');
  }



}
