import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-uses-trend',
  templateUrl: './memory-uses-trend.component.html',
  styleUrls: ['./memory-uses-trend.component.css']
})
export class MemoryUsesTrendComponent implements OnInit {
  chartData: any;
  options: any;
  widgets = [];
  chart = [];
  barChartOptions = {
    chart: {
      type: 'discreteBarChart',
      valueFormat:function (d) {
      return d3.format(',.4f')(d);
    },
      height: 300,
      margin: {
        top: 20,
        right: 20,
        bottom: 50,
        left: 55
      },
      duration:500,
      x: function (d) { return d.label; },
      y: function (d) { return d.value; },
      xAxis: {
      axisLabel: 'DATABASES'
    },
      yAxis: {
      axisLabel: 'MEMORY',
      axisLabelDistance: -10
    }
    }
  };

  constructor() { }

  ngOnInit() {
    this.options = this.barChartOptions;
    this.chartData = this.createBarChartData();
  }
  
  createBarChartData() {
    let data;
    data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label": "App-Server",
            "value": 20
          },
          {
            "label": "Documents",
            "value": 10
          },
          {
            "label": "Extensions",
            "value": 50
          },
          {
            "label": "Fab",
            "value": 70
          },
          // {
          //   "label": "Last-Login",
          //   "value": 90
          // },
          // {
          //   "label": "Meter",
          //   "value": 40
          // },
        ]
      }
    ]

    return data;
  }
}
