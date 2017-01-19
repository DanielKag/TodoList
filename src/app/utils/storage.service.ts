import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  public save(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public fetch(key: string) : any {
    return JSON.parse(localStorage.getItem(key));
  }
}
