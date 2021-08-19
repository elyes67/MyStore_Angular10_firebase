import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user:Observable<firebase.User> //variable user 

  constructor(private fa:AngularFireAuth) //déclaration de la bibliotheque fa
       { 
          this.user=this.fa.user
       }
       signup(email,password){
         return this.fa.createUserWithEmailAndPassword(email,password)
       }
       signin(email,password){
        return this.fa.signInWithEmailAndPassword(email,password)
      }

}
