import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { SuccessfulPayComponent } from './components/successful-pay/successfulPay.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NotFoundComponent,
    SuccessfulPayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
