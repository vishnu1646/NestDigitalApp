import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { ViewfriendComponent } from './viewfriend/viewfriend.component';
import { NavbarComponent } from './navbar/navbar.component';


const myRoute:Routes=[
{
  path:"",
  component:HomeComponent
},
{
  path:"admin",
  component:AdminComponent
},
{
  path:"viewcourse",
  component:ViewcourseComponent
},
{
  path:"viewfriend",
  component:ViewfriendComponent
},
{
  path:"nav",
  component:NavbarComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    ViewcourseComponent,
    ViewfriendComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(myRoute),FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
