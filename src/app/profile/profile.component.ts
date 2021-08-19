import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,OnDestroy {
  Uid
  successUpdate
  dataProfile={
    flName:'',
    image:'',
    bio:'',
    uid:''
   }
   task:AngularFireUploadTask //variable pour la stockage de le dosier et laploding
   ref:AngularFireStorageReference //pour crier un refreance de l'image
   persentages
   userSubscribe:Subscription
  constructor(private authservice:AuthService,private fs:AngularFirestore,private fst:AngularFireStorage) { 
    this.userSubscribe=this.authservice.user.subscribe((user)=>{
   
      this.Uid=user.uid
    
    })
  }

  ngOnInit(): void {
    this.fs.collection("users").ref.doc(localStorage.getItem("userConnect")).get().then((data)=>{
      console.log(data.data())
      this.dataProfile.flName=data.data()['FlName']
      this.dataProfile.image=data.data()['image']
      this.dataProfile.bio=data.data()['Bio']
      this.dataProfile.uid=localStorage.getItem("userConnect")
  })

  }
  update(){
    this.fs.collection("users").doc(this.dataProfile.uid).update({
      flName:this.dataProfile.flName,
      bio:this.dataProfile.bio
    }).then(()=>{
      this.successUpdate="updated!"
      window.location.reload()
   
    })
  }
  uploadImage(event){
    const id=Math.random().toString(36).substring(2)
    this.ref=this.fst.ref(id)
    this.task=this.ref.put(event.target.files[0])
    this.persentages=this.task.percentageChanges()
    this.task.then((data)=>{
      data.ref.getDownloadURL().then(url=>{
        this.fs.collection("users").doc(this.dataProfile.uid).update({
          image:url
        })
      })
    })
  }
  ngOnDestroy(){
    this.userSubscribe.unsubscribe()
    console.log("done user unscribe")
  }
}
