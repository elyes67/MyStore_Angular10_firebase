import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private serviceauth:AuthService,private firestore:AngularFirestore,private route:Router) //import et declaration de la service authontificatoin 
   { }

  ngOnInit(): void {
  }

       register(f){
       // console.log(f.value)
       let data=f.value
       this.serviceauth.signup(data.email,data.password).then((user)=>{ //then and catch arrow fonction 
        localStorage.setItem("userConnect",user.user.uid)
        this.firestore.collection("users").doc(user.user.uid).set({
          FlName:data.flName,
          Email:data.email,
          Bio:data.bio,
          Uid:user.user.uid,
          image:'https://us.123rf.com/450wm/apoev/apoev1904/apoev190400006/124108707-personne-photo-gris-espace-r%C3%A9serv%C3%A9-homme-silhouette-sur-fond-blanc.jpg?ver=6'
        }).then(()=>{
          this.route.navigate(['/'])
        }) 
        console.log("done")
       }).catch(()=>{
          console.log("error")
       })
  }


}
