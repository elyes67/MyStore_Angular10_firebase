import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-nevbar",
  templateUrl: "./nevbar.component.html",
  styleUrls: ["./nevbar.component.css"],
})
export class NevbarComponent implements OnInit {
  isuser;
  constructor(
    private af: AngularFireAuth,
    private route: Router,
    private serviceauth: AuthService
  ) {
    this.serviceauth.user.subscribe((user) => {
      if (user) {
        this.isuser = true;
      } else {
        this.isuser = false;
      }
    });
  }

  ngOnInit(): void {}
  logout() {
    this.af
      .signOut()
      .then(() => {
        localStorage.removeItem("userConnect")
        this.route.navigate(["/login"]);
      })
      .catch(() => {
        console.log("error");
      });
  }
}
