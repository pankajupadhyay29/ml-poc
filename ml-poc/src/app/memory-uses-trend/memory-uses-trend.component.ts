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
      type: '',
      height: 300,
      margin: {
        top: 20,
        right: 20,
        bottom: 50,
        left: 55
      },
      x: function (d) { return d.label; },
      y: function (d) { return d.value; },
      xAxis: {},
      yAxis: {}
    }
  };

  constructor() { }

  ngOnInit() {
    this.showBarChart()
  }

  showBarChart() {
    let graphData = [];
    let cOptions = this.barChartOptions;
    graphData.push(cOptions);
    graphData[0]['chart']['type'] = 'discreteBarChart';
    // graphData[0]['chart']['showValues'] = true;
    graphData[0]['chart']['valueFormat'] = function (d) {
      return d3.format(',.4f')(d);
    };
    graphData[0]['chart']['duration'] = 500;
    graphData[0]['chart'].xAxis = {
      axisLabel: 'DB Name'
    }
    graphData[0]['chart'].yAxis = {
      axisLabel: 'MEMORY',
      axisLabelDistance: -10
    }
    let bardata = this.createBarChartData();
    graphData.push(bardata);
    this.options = graphData[0];
    this.chartData = graphData[1];

  }

  createBarChartData() {
    let data;
    data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label": "DB1",
            "value": 20
          },
          {
            "label": "DB2",
            "value": 10
          },
          {
            "label": "DB3",
            "value": 50
          },
          {
            "label": "DB4",
            "value": 70
          },
          {
            "label": "DB5",
            "value": 90
          },
          {
            "label": "DB6",
            "value": 40
          },
        ]
      }
    ]

    return data;
  }
}
