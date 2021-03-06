import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/app.reducer';
import { Observable } from '../../../../node_modules/rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>, private authService: AuthService) { }

  ngOnInit() {
     this.isAuth$ = this.store.select(fromRoot.getIsAuth);
  }

  onLogout(){
    this.authService.logout();
  }

}
