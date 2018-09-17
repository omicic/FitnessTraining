import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared.module';

import { SigninComponent } from '../auth/signin/signin.component';
import { LoginComponent } from '../auth/login/login.component';

@NgModule({
    declarations: [SigninComponent, LoginComponent],
    imports: [
      ReactiveFormsModule,
      AngularFireAuthModule,
      SharedModule,
      AuthRoutingModule
    ]
  })

export class AuthModule {}