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
  constructor(private layout: LayoutService) {  }

  ngOnInit() {
    this.widgets = this.layout.getWidgetLayout();
  }
  
  getWidgetClasses(widget){
    return "w-" + widget.width + ' h-' + widget.height
  }
}
