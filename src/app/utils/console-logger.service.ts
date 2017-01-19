import { Injectable } from '@angular/core';

@Injectable()
export class ConsoleLoggerService {

  constructor() { }

  public log(value: string) : void {
    console.log(value);
  }

}
