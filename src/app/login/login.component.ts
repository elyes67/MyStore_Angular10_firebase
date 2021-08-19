import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
messageError
  constructor(private serviceauth:AuthService,private route:Router )   { }

  ngOnInit(): void {

  }
  login(f){
    let data=f.value
    this.serviceauth.signin(data.email,data.password)
    .then((user)=>{
      //console.log("login")
     this.route.navigate(['/'])
     localStorage.setItem("userConnect",user.user.uid)
    })
    .catch(()=>{console.log("error")
     this.messageError="Incorrect email and  password" 
    })

  }
}
