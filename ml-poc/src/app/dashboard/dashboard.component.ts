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
      x: function (d) { return d.label; },
      y: function (d) { return d.value; },
      xAxis: {},
      yAxis: {}
    }
  };

  constructor(private layout: LayoutService, private chart_service: ChartService) { }

  ngOnInit() {
    this.widgets = this.layout.getWidgetLayout();

    this.chart_service.getChartList().subscribe(result => {
      this.chart = result;
      this.transform();
    });


    for (let i = 0; i < this.widgets.length; i++) {
      this.widgets[i]['chart'] = this.widgetsGraphs[i] || {};
    }

  }


  transform() {
    let graphData = [];
    for (let i = 0; i < this.chart.length; i++) {
      graphData = [];
      switch (i) {
        case 0: graphData.push(this.chartOptions);

          graphData[i]['chart']['type'] = 'lineChart';
          graphData[i]['chart']['useInteractiveGuideline'] = true;
          graphData[i]['chart'].xAxis = { axisLabel: 'Time (ms)' }
          graphData[i]['chart'].yAxis = {
            axisLabel: 'Voltage (v)',
            tickFormat: function (d) {
              return d3.format('.02f')(d);
            },
            axisLabelDistance: -10
          }
          graphData.push(this.chart[1]['Data']);
          this.widgetsGraphs.push(graphData);
          break;
        case 1: graphData.push(this.chartOptions);
          graphData[0]['chart']['type'] = 'discreteBarChart';
          graphData[0]['chart']['showValues'] = true;
          graphData[0]['chart']['valueFormat'] = function (d) {
            return d3.format(',.4f')(d);
          };
          graphData[0]['chart']['duration'] = 500;
          graphData[0]['chart'].xAxis = {
            axisLabel: 'X Axis'
          }
          graphData[0]['chart'].yAxis = {
            axisLabel: 'Y Axis',
            axisLabelDistance: -10
          }
          graphData.push(this.chart[0]['Data']);
          this.widgetsGraphs.push(graphData);
          break;
      }

    }
    console.log(this.widgetsGraphs);
  }


  getWidgetClasses(widget) {
    return "w-" + widget.width + ' h-' + widget.height
  }
}
