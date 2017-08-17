import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { CoyLoginComponent } from './coy-login/coy-login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserLoginComponent, CoyLoginComponent]
})
export class LoginModule { }
