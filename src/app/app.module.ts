import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Agrega esta línea
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './components/product-page/product-page.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Agrega esta línea
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
