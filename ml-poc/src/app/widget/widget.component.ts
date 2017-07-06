import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  @Input() data: any;
  options: any;
  chartData: any;

  constructor() { }

  ngOnInit() {
    console.log('data in widget',this.data.title,this.data.widgetData);
  }
}
