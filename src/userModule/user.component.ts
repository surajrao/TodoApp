import { User } from './../models/User';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) { }

  users: User[] = [];
  ngOnInit() {
    this.userService.getUsers()
      .subscribe(data => {
        this.users = data;
      }, console.log);
  }

  viewTodos(user: User) {
    this.router.navigate(['/todos', user.id]);
  }
}
