import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-widget-title',
  templateUrl: './widget-title.component.html',
  styleUrls: ['./widget-title.component.css']
})
export class WidgetTitleComponent {
  @Input() text: string
}
