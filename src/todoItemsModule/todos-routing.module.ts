import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoItemsComponent } from './todoItems.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TodoItemsComponent,
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TodosRoutingModule { }
