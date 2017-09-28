import { User } from './../models/User';
import { UserService } from './user.service';
import { TodoItemsService } from './../todoItemsModule/todoItems.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService, private todoItemsService: TodoItemsService) { }

  users: User[] = [];
  ngOnInit() {
    this.userService.getUsers()
      .subscribe(data => {
        this.users = data;
      }, console.log);
  }

  viewTodos(user: User) {
    this.todoItemsService.getTodoItems(user.id)
      .subscribe(data => {
        console.log(data);
      });
  }
}
