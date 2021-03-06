import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
idparams
dataProduct={
  title:'',
  image:'',
  description:''
}
  constructor(private parms:ActivatedRoute,private fs:AngularFirestore) {
    this.parms.params.subscribe(query=>{
     return this.idparams=query.id
    })
  }
 
  ngOnInit(): void {
    this.fs.collection('products').ref.doc(this.idparams).get().then(data=>{
      console.log(data.data())
      this.dataProduct.title=data.data()['title']
      this.dataProduct.image=data.data()['image']
      this.dataProduct.description=data.data()['description']
    })
  }

}
