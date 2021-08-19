import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/guard/auth.Guardservice';
import { NoauthGuardService } from './services/guard/noauth-guard.service';


const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent,canActivate:[NoauthGuardService]},
  {path:'register',component:RegisterComponent,canActivate:[NoauthGuardService]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]},
  {path:'products',component:ProductsComponent,canActivate:[AuthGuardService]},
  {path:'myproducts',component:MyproductsComponent,canActivate:[AuthGuardService]},
  {path:'product/:id',component:ProductDetailComponent,canActivate:[AuthGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
