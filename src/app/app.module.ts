import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const myRoute:Routes=[

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(myRoute),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
