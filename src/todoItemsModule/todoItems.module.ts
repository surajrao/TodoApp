import { TodoItemsService } from './todoItems.service';
import { NgModule } from '@angular/core';
// import { UserComponent } from './user.component';
import { CommonModule } from './../app/common.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [TodoItemsService],
})
export class TodoItemsModule { }
