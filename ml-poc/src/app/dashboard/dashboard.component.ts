import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';
import { WidgetComponent } from '../widget/widget.component'
import { ChartService } from "app/chart.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  widgets = [];
  chart = [];
  AvailaibleChart = [];
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

  constructor(private layout: LayoutService, private chart_service: ChartService) { }

  ngOnInit() {
    this.chart_service.getChartList().subscribe(result => {
      this.chart_service.getAvailaibleChartList().subscribe(res => {
        this.widgets = this.layout.getWidgetLayout();
        this.chart = result;
        this.transform();
        this.AvailaibleChart = res;
        this.transformAvailaibleChart();
        this.showBarChart();
        for (let i = 0; i < this.widgets.length; i++) {
          this.widgets[i]['chart'] = this.widgetsGraphs[i] || {};
        }
      });      
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
    this.widgetsGraphs.push(graphData);

  }

  createAvailaibleChartData() {
    let data = [];
    let i = 0;
    let linedata = {};
    linedata['values'] = [];
    this.AvailaibleChart.forEach(element => {
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
    this.widgetsGraphs.push(graphData);
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
    this.widgetsGraphs.push(graphData);
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

  getWidgetClasses(widget) {
    let styles = "w-" + widget.width + ' h-' + widget.height;
    styles = (widget.settings.type == 'links'? 'links': 'widget') + ' ' + styles;
    return styles;
  }
}
