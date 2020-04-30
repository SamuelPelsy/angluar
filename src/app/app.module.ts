import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from './swagger/api.module';
import { BurgerComponent } from './burger/burger.component';
import { BurgerListComponent } from './burger-list/burger-list.component'; 

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    BurgerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
