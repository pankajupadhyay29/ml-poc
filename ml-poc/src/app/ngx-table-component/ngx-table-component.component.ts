import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ngx-table-component',
  templateUrl: './ngx-table-component.component.html',
  styleUrls: ['./ngx-table-component.component.css']
})
export class NgxTableComponentComponent implements OnInit {
  @Input() rows: Array<Object>;
  constructor() { }

  ngOnInit() {
    console.log(this.rows);
  }

  onAction():void{
    console.log('here');
  }



}
