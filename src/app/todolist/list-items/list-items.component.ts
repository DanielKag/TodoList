import { Component, OnInit } from '@angular/core';
import {Todolist} from "../todolist";

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  private list: Todolist
  constructor(list: Todolist) {
    this.list = list
  }

  ngOnInit() {
  }

}
