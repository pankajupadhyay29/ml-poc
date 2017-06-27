import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';
import { WidgetComponent } from '../widget/widget.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  widgets = [];
  chart=[];
  constructor(private layout: LayoutService) {  }

  ngOnInit() {
    this.widgets = this.layout.getWidgetLayout();
    this.chart = this.layout.getChartData();

    for(let i=0;i<this.widgets.length;i++)
    {
      this.widgets[i]['chart']=this.chart[i] || {};
    }

  }

  
  
  getWidgetClasses(widget){
    return "w-" + widget.width + ' h-' + widget.height
  }
}
