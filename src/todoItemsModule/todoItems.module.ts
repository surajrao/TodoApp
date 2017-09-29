import { TodoItemsService } from './todoItems.service';
import { NgModule } from '@angular/core';

import { TodosRoutingModule } from './todos-routing.module';
import { TodoItemsComponent } from './todoItems.component';
import { SharedCommonModule } from './../app/common.module';

@NgModule({
  declarations: [
    TodoItemsComponent
  ],
  imports: [
    SharedCommonModule,
    TodosRoutingModule
  ],
  providers: [TodoItemsService],
})
export class TodoItemsModule { }
