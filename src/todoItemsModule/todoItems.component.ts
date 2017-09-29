import { TodoItem } from './../models/TodoItem';
import { TodoItemsService } from './../todoItemsModule/todoItems.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-todo-list',
  templateUrl: 'todoItems.component.html',
  styleUrls: ['todoItems.component.scss']
})
export class TodoItemsComponent implements OnInit {
  todoItems: TodoItem[] = [];
  constructor(private route: ActivatedRoute,
    private todoItemsService: TodoItemsService) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => this.todoItemsService.getTodoItems(params.get('id')))
      .subscribe(data => {
        console.log(data);
        this.todoItems = data;
      });
    // this.todoItemsService.getTodoItems()
  }
}
