import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
id=""
password=""
constructor(private r:Router){}
  login=()=>{
    if(this.id=="1122"&&this.password=="12345"){
      this.r.navigate([])
    }
    else{
      alert("Invalid Credential")
    }
  }
}

