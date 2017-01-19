import {Component, OnInit, Input} from '@angular/core';
import {Item} from "../item";
import {Todolist} from "../todolist";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input() item: Item;
    
  constructor(private list: Todolist) {}

  checkBoxClicked(x: any) {
    this.item.done = x.target.checked;
  }


}
