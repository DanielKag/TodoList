/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsoleLoggerService } from './console-logger.service';

describe('ConsoleLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsoleLoggerService]
    });
  });

  it('should ...', inject([ConsoleLoggerService], (service: ConsoleLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
