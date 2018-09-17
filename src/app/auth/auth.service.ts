import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import { AuthData } from "../model/auth-data.model";

@Injectable()
export class AuthService {
    constructor(
        private router: Router,
        private afAuth: AngularFireAuth
    ){}

    initAuthListener(){
        this.afAuth.authState.subscribe(user =>{
            if (user) {
                //setAuthenticated()  ui.action
                this.router.navigate(['/training']);
            } else {
                //setUnauthenticated() ui.action
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