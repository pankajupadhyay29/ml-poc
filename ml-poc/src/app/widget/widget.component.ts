import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  @Input() data: any;
  @Input() widgetData:any;
  options: any;
  chartData: any;

  constructor() { }

  ngOnInit() {
    console.log('data in widget', Object.assign({}, this.data) , this.data.widgetData);
  }

  ngOnChange(){
    console.log('on data change in widget', Object.assign({}, this.data) , this.widgetData);
  }
}
