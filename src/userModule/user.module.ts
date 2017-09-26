import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { CommonModule } from './../app/common.module';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent
  ],
  providers: [UserService],
})
export class UserModule { }
