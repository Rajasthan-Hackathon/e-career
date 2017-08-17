import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { CoyLoginComponent } from './coy-login/coy-login.component';

import { RouterModule } from '@angular/router'


const ROUTES = [
  {
    path: 'user', component: UserLoginComponent
  },

  {
    path: 'company', component: CoyLoginComponent
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [UserLoginComponent, CoyLoginComponent]
})
export class LoginModule { }
