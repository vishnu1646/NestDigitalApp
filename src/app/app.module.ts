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
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { EmpSignupComponent } from './emp-signup/emp-signup.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';


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
},
{
  path:"emp",
  component:AddemployeeComponent
},
{
  path:"addcourse",
  component:AddcourseComponent
},
{
  path:"addfriend",
  component:AddfriendComponent
},
{
  path:"empsignup",
  component:EmpSignupComponent
},
{
  path:"gallery",
  component:GalleryComponent
},
{
  path:"contact",
  component:ContactusComponent
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
    AddemployeeComponent,
    AddcourseComponent,
    AddfriendComponent,
    EmployeeNavbarComponent,
    EmpSignupComponent,
    GalleryComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(myRoute),FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
