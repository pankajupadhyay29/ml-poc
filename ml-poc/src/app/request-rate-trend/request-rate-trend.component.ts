import { Component, OnInit } from '@angular/core';
import { LayoutService } from "app/layout.service";
import { ChartService } from "app/chart.service";

@Component({
  selector: 'app-request-rate-trend',
  templateUrl: './request-rate-trend.component.html',
  styleUrls: ['./request-rate-trend.component.css']
})
export class RequestRateTrendComponent implements OnInit {
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

  constructor(private layout: LayoutService, private chart_service: ChartService) { }

  ngOnInit() {
    this.chart_service.getChartList().subscribe(result => {
      console.log(result);
      this.chart = result;
      this.transform();
    });
  }

  transform() {
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
    let data = this.createLineChartData();
    graphData.push(data);
     this.options = graphData[0];
     this.chartData = graphData[1];
  }


  createLineChartData() {
    let data = [];
    this.chart.forEach(element => {
      let linedata = {};
      linedata['values'] = [];
      for (let i = 0; i < element.data.length; i++) {
        let tempdata = { x: 0, y: 0 };
        tempdata.x = (i == 0) ? i : i * 3;
        tempdata.y = element.data[i].data.length;
        linedata['values'].push(tempdata);
      }
      linedata['key'] = element.name;
      linedata['color'] = '#7777ff';
      data.push(linedata);
    });
    return data;

  }

}
