import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConsoleLoggerService} from './console-logger.service';
import {StorageService} from './storage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ConsoleLoggerService, StorageService],
  declarations: []
})
export class UtilsModule { }
