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

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ProductspageComponent
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