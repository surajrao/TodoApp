import { UsersRoutingModule } from './../userModule/users-routing.module';
import { SharedCommonModule } from './common.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StorageService } from './storage.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// RouterModule.forRoot([
//   { path: '', redirectTo: '/users', pathMatch: 'full' },
//   { path: 'users', loadChildren: './../userModule/user.module#UserModule' },
//   { path: 'todos:id', loadChildren: './../todoItemsModule/todoItems.module#todoItemsModule' }
// ])

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedCommonModule,
    AppRoutingModule,
  ],
  providers: [StorageService],
  bootstrap: [AppComponent],
  exports: [
    BrowserModule
  ]
})
export class AppModule { }
