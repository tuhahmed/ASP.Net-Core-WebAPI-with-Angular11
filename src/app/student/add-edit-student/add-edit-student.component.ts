import { Component, OnInit, Input } from '@angular/core';
import { ShowCourseComponent } from 'src/app/course/show-course/show-course.component';
import { SharedService } from 'src/app/shared.service';
import { ShowStudentComponent } from '../show-student/show-student.component';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() std:any;
  studentId: number;
  firstName: string;
  lastName:string;
  department:string;
 
    ngOnInit():void {
      
      this.studentId= this.std.studentId;
      this.firstName= this.std.firstName;
      this.lastName= this.std.lastName;
      this.department= this.std.department;
    }
  
    addStudent(){
      var val= {courseId: this.studentId, firstName:this.firstName, lastName:this.lastName, department:this.department}
      this.service.addStudent(val).subscribe(res=>{
        alert("Added Successfully!");
        //"Added Successfuly."
      });
    }
    updateStudent(){
      var val= {studentId: this.studentId, firstName:this.firstName, lastName:this.lastName, department:this.department}
      this.service.updateStudent(val).subscribe(res=>{
        alert("Updated Successfully!");
      });
      //this.close();
      //ShowCourseComponent.close();
    //console.log("UpdateC.alled");
    }

}



