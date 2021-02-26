import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-enrollment',
  templateUrl: './add-edit-enrollment.component.html',
  styleUrls: ['./add-edit-enrollment.component.scss']
})
export class AddEditEnrollmentComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() enroll:any;
  courseId: string;
  studentId: string;
    ngOnInit():void {
      this.courseId= this.enroll.courseId;
      this.studentId= this.enroll.studentId;
    }
  
    addEnrollment(){
      var val= {courseId: this.courseId, studentId:this.studentId}
      this.service.addEnrollment(val).subscribe(res=>{
        alert("Added Successfully!");
        //"Added Successfuly."
      });
    }
    updateEnrollment(){
      var val= {courseId: this.courseId, studentId:this.studentId}
      this.service.updateEnrollment(val).subscribe(res=>{
        alert("Updated Successfully!");
      });
    }
  
  
  
  }
  