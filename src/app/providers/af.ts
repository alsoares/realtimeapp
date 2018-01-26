import {Injectable} from "@angular/core";
import {AngularFireModule, } from 'angularfire2';
import {AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()

export class AF{

    constructor(public db: AngularFireDatabase, public af: AngularFireAuth){}

     loginWithGoogle()
     {
       return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
     }

     logout() {
        this.af.auth.signOut();
     }
}