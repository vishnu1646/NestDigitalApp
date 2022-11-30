import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
username=""
password=""
constructor(private r:Router){}
login=()=>{
  if(this.username=="admin" && this.password=="nestdigital"){
    this.r.navigate([])
  
  }else{
    console.log("Invalid")
  }
}
}
