import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeaderComponent } from './list-header/list-header.component';
import { ListMainComponent } from './list-main/list-main.component';
import { ListFooterComponent } from './list-footer/list-footer.component';
import { WidgetTitleComponent } from './widget-title/widget-title.component';
import { ItemInputComponent } from './item-input/item-input.component';
import { ListToggleComponent } from './list-toggle/list-toggle.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ListItemComponent } from './list-item/list-item.component';
import { CounterComponent } from './counter/counter.component';
import { ActionBtnComponent } from './action-btn/action-btn.component';
import { TodolistComponent } from './todolist/todolist.component';
import {Todolist} from './todolist';
import { GetLowPipe } from './Pipes/GetLow/get-low.pipe';
import { FilterByPipe } from './Pipes/FilterBy/filter-by.pipe';
import { MarkerDirective } from './marker.directive';
import { AutoFocusDirective } from './auto-focus.directive';
import { IfDirective } from './if.directive';
import {UtilsModule} from '../utils/utils.module';


@NgModule({
  imports: [
    CommonModule, UtilsModule
  ],
    // in order to provide only the class, and not the singleton instance we use:
    // In the code that want this injection, we'll do: var log = new logger()
    // {provide:  ILogger, useValue: Logger}    
    // we can also use factory
    // {provide:  ILogger, useFactory: function() { return new LoggerService()}}
    providers: [Todolist],
  declarations: [ListHeaderComponent,
                 ListMainComponent,
                 ListFooterComponent,
                 WidgetTitleComponent,
                 ItemInputComponent,
                 ListToggleComponent,
                 ListItemsComponent,
                 ListItemComponent,
                 CounterComponent,
                 ActionBtnComponent,
                 TodolistComponent,
                 GetLowPipe,
                 FilterByPipe,
                 MarkerDirective,
                 AutoFocusDirective,
                 IfDirective],
                exports: [TodolistComponent]
})
export class TodolistModule { }
