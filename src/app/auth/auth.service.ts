import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import { AuthData } from "../model/auth-data.model";

import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers/app.reducer';
import * as Auth from '../reducers/auth.action';

@Injectable()
export class AuthService {
    constructor(
        private router: Router,
        private afAuth: AngularFireAuth,
        private store: Store<fromRoot.State>
    ){}

    initAuthListener(){
        this.afAuth.authState.subscribe(user =>{
            if (user) {
                //setAuthenticated()  auth.action
                this.store.dispatch(new Auth.SetAuthenticated());
                this.router.navigate(['/training']);
            } else {
                //setUnauthenticated() auth.action
                this.store.dispatch(new Auth.SetUnauthenticated());
                this.router.navigate(['/login']);
            }
        })
    }

    login(authData: AuthData){
          //StartLoading() ui.action
          this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
            .then(result => {
                // StopLoading() ui.action
                
            })
            .catch(error => {
                // UI.stopLoading() ui.action
                //showError use Snackbar
             });
    }

    logout() {
        this.afAuth.auth.signOut();
    }
      
    

}