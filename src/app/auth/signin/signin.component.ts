import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { NgForm } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/app.reducer'
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isLoading$: Observable<boolean>;
  constructor(private authService: AuthService, private store: Store<fromRoot.State> ) { }

  ngOnInit() {

    this.isLoading$ = this.store.select(fromRoot.getIsLoading);

    /*this.signInForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {validators: [Validators.required]}),
      birthdate: new FormControl('',{validators: [Validators.required]})
    });*/

  }

  onSubmit(form: NgForm){
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
      //birthdate: form.value.birthdate,
      //agree: form.value.agree
    })



  }

}
