import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { ProductspageComponent } from './components/productspage/productspage.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { SuccessfulPayComponent } from './components/successful-pay/successfulPay.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ProductspageComponent,
    ProductPageComponent,
    CreateProductComponent,
    FooterComponent,
    NotFoundComponent,
    SuccessfulPayComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService,
    HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}