import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import { AuthData } from "../model/auth-data.model";

import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers/app.reducer';
import * as Auth from '../reducers/auth.action';
import * as UI from '../reducers/ui.action';

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

    registerUser(authData: AuthData) {
         //UI.StartLoading() isLoading set to true
         this.store.dispatch(new UI.SetStartLoading());
         this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
         .then(result => {
             //isLoading false, UI.StopLoading()
             this.store.dispatch(new UI.SetStopLoading());
         })
         .catch( error => {
             //  isLoading false
             this.store.dispatch(new UI.SetStopLoading());
             console.log(error);
         }

         );
    }

    logout() {
        this.afAuth.auth.signOut();
    }
      
    

}