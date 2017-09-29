import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/users', pathMatch: 'full' },
      { path: 'users', loadChildren: 'userModule/user.module#UserModule' },
      { path: 'todos/:id', loadChildren: 'todoItemsModule/todoItems.module#TodoItemsModule' }
    ], { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
