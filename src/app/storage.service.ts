import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import '../app/rxjs-extensions';
import * as localforage from 'localforage';

@Injectable()
export class StorageService {
  constructor() {
    localforage.config({
      name: 'ClarityTodoApp',
      version: 1.0,
      storeName: 'todoItems', // Should be alphanumeric, with underscores.
      description: 'Todo Items Store for users'
    });
  }

  getData(key: string): Observable<any> {
    return Observable.fromPromise(localforage.getItem(key));
  }

  setData(key: string, value: any): Observable<any> {
    return Observable.fromPromise(localforage.setItem(key, value));
  }

}
