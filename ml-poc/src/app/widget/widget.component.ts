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
    let chart = this.data.chart;
   // console.log('in widget.ts', chart);
    this.options = '';
    this.chartData = '';


    if (chart !== {}) {
      this.options = chart[0];
      this.chartData = chart[1];
    }
   // console.log('opt ',this.options);
   // console.log(this.chartData);
  }
}
