import { Component, OnInit } from '@angular/core';
import {Todolist} from "../todolist";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  private _list: Todolist;
  private _appTitle: string;

  constructor(list: Todolist) {
    this._list = list;
    this._appTitle = "TODOS"
  }

  get appTitle() : string {
    return this._appTitle;
  }

  public addItemToList(itemTitle: string) :void {
    this._list.addItem(itemTitle)
  }

  ngOnInit() {
  }

}
