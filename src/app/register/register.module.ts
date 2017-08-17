import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { CoyRegisterComponent } from './coy-register/coy-register.component';

import { RouterModule } from '@angular/router';

const ROUTES = [
  {
    path: 'user', component: UserRegisterComponent
  },

  {
    path: 'company', component: CoyRegisterComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [UserRegisterComponent, CoyRegisterComponent]
})
export class RegisterModule { }
