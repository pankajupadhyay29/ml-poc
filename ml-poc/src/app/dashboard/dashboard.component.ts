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
  constructor(private layout: LayoutService) { }

  ngOnInit() {
    this.widgets = this.layout.getWidgetLayout();
    console.log(this.widgets);
  }
  getWidgetClasses(widget) {
    let styles = "w-" + widget.width + ' h-' + widget.height;
    styles = (widget.settings.type == 'links' ? 'links' : 'widget') + ' ' + styles;
    return styles;
  }
}
