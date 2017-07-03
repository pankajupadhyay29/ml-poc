import { Component, OnInit } from '@angular/core';
import { ChartService } from "app/chart.service";

@Component({
  selector: 'app-db-availability-trend',
  templateUrl: './db-availability-trend.component.html',
  styleUrls: ['./db-availability-trend.component.css']
})
export class DbAvailabilityTrendComponent implements OnInit {

  chartData: any;
  options: any;
  widgets = [];
  chart = [];
  widgetsGraphs = [];

  chartOptions = {
    chart: {
      type: '',
      height: 300,
      margin: {
        top: 20,
        right: 20,
        bottom: 50,
        left: 55
      },
      x: function (d) { return d.lable; },
      y: function (d) { return d.value; },
      xAxis: {},
      yAxis: {}
    }
  };

  constructor(private chart_service: ChartService) { }

  ngOnInit() {
    this.chart_service.getAvailaibleChartList().subscribe(result => {
      console.log(result);
      this.chart = result;
      this.transformAvailaibleChart();
    });
  }

  transformAvailaibleChart() {
    let graphData = [];
    let cOptions = this.chartOptions;

    graphData.push(cOptions);

    graphData[0]['chart']['type'] = 'lineChart';
    graphData[0]['chart']['useInteractiveGuideline'] = true;
    graphData[0]['chart'].xAxis = { axisLabel: 'Time (ms)' }
    graphData[0]['chart'].x = function (d) { return d.x; },
      graphData[0]['chart'].y = function (d) { return d.y; },
      graphData[0]['chart'].yAxis = {
        axisLabel: 'NO OF REQUESTS',
        tickFormat: function (d) {
          return d3.format('.02f')(d);
        },
        axisLabelDistance: -10
      }

    let data = this.createAvailaibleChartData();
    graphData.push(data);
     this.options = graphData[0];
     this.chartData = graphData[1];

  }


  createAvailaibleChartData() {
    let data = [];
    let i = 0;
    let linedata = {};
    linedata['values'] = [];
    this.chart.forEach(element => {
      let tempdata = { x: 0, y: 0 };
      tempdata.x = i;
      tempdata.y = element.data;
      linedata['values'].push(tempdata);
      i += 3;
    });
    linedata['color'] = '#7777ff';
    linedata['area'] = true;
    data.push(linedata);
    return data;
  }
}
