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
  interval: any;

  chartOptions = {
    chart: {
      type: 'lineChart',
      height: 300,
      margin: {
        top: 20,
        right: 20,
        bottom: 50,
        left: 55
      },
      useInteractiveGuideline: true,
      x: function (d) { return d.x; },
      y: function (d) { return d.y; },
      xAxis: { axisLabel: 'Time (ms)' },
      yAxis: {
        axisLabel: 'NO OF REQUESTS',
        tickFormat: function (d) {
          return d3.format('.02f')(d);
        },
        axisLabelDistance: -10
      }
    }
  };

  constructor(private layout: LayoutService, private chart_service: ChartService) { }

  ngOnInit() {
    this.loadService = this.loadService.bind(this);
    this.loadService();
    this.interval = setInterval(this.loadService, 20 * 1000);
  }

  loadService() {
    this.chart_service.getChartList().subscribe(result => {
      this.chart = result;
      this.options = this.chartOptions;
      this.chartData = this.createLineChartData();
    });
  }

  createLineChartData() {
    let data = [];
    let colors = ['#7777ff', '#7777aa', '#777788', '#777755', '#777722']
    this.chart.forEach((element, index) => {
      let linedata = {};
      linedata['values'] = [];
      for (let i = 0; i < element.data.length; i++) {
        let tempdata = { x: 0, y: 0 };
        tempdata.x = (i == 0) ? i : i * 3;
        tempdata.y = element.data[i].data.length;
        linedata['values'].push(tempdata);
      }
      linedata['key'] = element.name;
      linedata['color'] = colors[index % 5];
      data.push(linedata);
    });
    return data;

  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
