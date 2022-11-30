import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {
courseTitle=""
courseDescription=""
courseDuration=""
courseDate=""
courseVenue=""

constructor(private api:ApiService){}
readValues=()=>
{
  let data:any={"Course":this.courseTitle,"Describe":this.courseDescription,"Duration":this.courseDuration,"Date":this.courseDate,"Venue":this.courseVenue}
  console.log(data)
  this.api.addcourse(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=="success"){
        this.courseTitle=""
        this.courseDescription=""
        this.courseDuration=""
        this.courseDate=""
        this.courseVenue=""
      }else{
        alert("Something went Wrong")
      }
    }
  )
}
}
