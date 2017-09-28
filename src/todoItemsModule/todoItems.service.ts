import { Http } from '@angular/http';
import { TodoItem } from './../models/TodoItem';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import '../app/rxjs-extensions';
@Injectable()
export class TodoItemsService {
  constructor(private http: Http) { }
  getTodoItems(id: number): Observable<TodoItem[]> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`).map(res => <TodoItem[]>(res.json()));
  }
}
