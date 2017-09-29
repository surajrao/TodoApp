import { Http } from '@angular/http';
import { TodoItem } from './../models/TodoItem';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StorageService } from './../app/storage.service';
import '../app/rxjs-extensions';
@Injectable()
export class TodoItemsService {


  constructor(private http: Http, private storageService: StorageService) {

  }
  getTodoItems(id: string): Observable<TodoItem[]> {
    return this.storageService.getData(id)
      .map(result => result ? <TodoItem[]>(result.items) : []).switchMap(items => {
        if (items.length === 0) {
          return this.http.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`).switchMap(res =>
            this.storageService.setData(id, { items: <TodoItem[]>res.json() }));
        } else {
          return Observable.of(items);
        }
      }).catch(err => Observable.throw(err));
  }

}
