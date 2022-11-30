import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent {
name=""
DescribeYourFriend=""
friendNickName=""

constructor(private api:ApiService){}
readValue=()=>
{
  let data:any={"name":this.name,"DescribeYourFriend":this.DescribeYourFriend,"Nickname":this.friendNickName}
console.log(data)
this.api.addfriend(data).subscribe(
  (response:any)=>{
    console.log(response)
    if(response.status=="success"){
      this.name=""
      this.DescribeYourFriend=""
      this.friendNickName=""
    }
    else{
      alert("Something Wrong")
    }
  }
)
}
}
