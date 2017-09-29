import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { SharedCommonModule } from './../app/common.module';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    SharedCommonModule,
    UsersRoutingModule
  ],
  providers: [UserService],
})
export class UserModule { }
