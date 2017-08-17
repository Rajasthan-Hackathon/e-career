import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { CoyRegisterComponent } from './coy-register/coy-register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserRegisterComponent, CoyRegisterComponent]
})
export class RegisterModule { }
