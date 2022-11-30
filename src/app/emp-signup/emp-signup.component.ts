import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-signup',
  templateUrl: './emp-signup.component.html',
  styleUrls: ['./emp-signup.component.css']
})
export class EmpSignupComponent {
  password=""
  confirmpassword=""
  
constructor(private r:Router){}

readValue=()=>{
  let data:any={"password":this.password,"confirmpassword":this.confirmpassword}
  console.log(data)
  if(this.password==this.confirmpassword){
    alert("Employee Created Successfully")
    this.r.navigate(['/emp'])
  }else{
    alert("Invalid")
  }
}
}
