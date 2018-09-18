import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/app.reducer'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isLoading$: Observable<boolean>;
  constructor(private store: Store<fromRoot.State> ) { }

  ngOnInit() {

    this.isLoading$ = this.store.select(fromRoot.getIsLoading);

  }

}
