import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { CoyRegisterComponent } from './coy-register/coy-register.component';

import { RouterModule } from '@angular/router'
import { TagInputModule } from "ngx-chips";

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
    TagInputModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [UserRegisterComponent, CoyRegisterComponent]
})
export class RegisterModule { }
