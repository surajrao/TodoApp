import { Http } from '@angular/http';
import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import '../app/rxjs-extensions';
@Injectable()
export class UserService {
  constructor(private http: Http) { }
  getUsers(): Observable<User[]> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users`).map(res => <User[]>(res.json()));
  }
}
