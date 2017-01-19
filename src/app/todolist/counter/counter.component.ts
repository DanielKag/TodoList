import {Component, OnInit, Input} from '@angular/core';
import {Todolist} from "../todolist";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @Input() numberOfTasksRemaining : number;

}
