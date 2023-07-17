import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductspageComponent} from './components/productspage/productspage.component';
import { RegisterComponent} from './components/register/register.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { SuccessfulPayComponent} from './components/successful-pay/successfulPay.component';
import { CartComponent }  from './components/cart/cart.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products', component: ProductspageComponent},
  {path: 'products/:id', component:  ProductPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
