import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Observable } from '../../../../node_modules/rxjs';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/app.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading$: Observable<boolean>;

  constructor(private authService: AuthService, private store: Store<fromRoot.State>) { }

  ngOnInit() {

    this.isLoading$ = this.store.select(fromRoot.getIsLoading);

   /* this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {validators: [Validators.required]})
    });*/
  }

  onSubmit(form: NgForm){
    this.authService.login({
      email: form.value.email,
      password: form.value.password
    });
  }

}
