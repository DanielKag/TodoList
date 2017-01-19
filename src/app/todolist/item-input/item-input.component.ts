import {Component, EventEmitter, Output} from '@angular/core';
import {Todolist} from "../todolist";

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.css']
})
export class ItemInputComponent {

  @Output()
  private itemClicked = new EventEmitter<string>();

  public fireEvent(text: string) {
    this.itemClicked.emit(text);
  }

}
