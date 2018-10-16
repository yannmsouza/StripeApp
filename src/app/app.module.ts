import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StripeResource } from 'stripe';
import { HomePageComponent } from './home-page/home-page.component';
import { RoutingModule } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  

}
