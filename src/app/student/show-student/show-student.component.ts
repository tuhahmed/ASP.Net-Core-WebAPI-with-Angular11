import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {
 

  constructor(private service:SharedService) { }
  CourseList:any=[];
  StudentList:any=[];

ModelTitle: string;
ActivateAddEditStudent: boolean=false;
std:any;

  ngOnInit() {
    this.refreshCourseList();
    this.refreshStudentList();
  }

  addClick(){
    this.std={
            studentId:0,
            firstName:"",
            lastName:"",
            department:"",
            enrollment:[]
    }
    this.ModelTitle="Add Student";
    this.ActivateAddEditStudent=true;
  }
  

 editClick(item){
this.std=item;
this.ModelTitle="Edit Student";
this.ActivateAddEditStudent=true;

 }

deleteClick(item){
  if(confirm("Are you sure want to delete this Student's record?"))
  {
    //this.ModelTitle="Delete Student";
    this.service.deleteStudent(item.studentId).subscribe(res=>{
      alert("Deleted Successfully!");
      this.refreshStudentList();
    });
  }
   }

   closeClick(){
    this.ActivateAddEditStudent=false;
    this.refreshStudentList();
 }
  refreshStudentList(){
    this.service.getStudentList().subscribe(data=>{this.StudentList=data;});  
    }
    refreshCourseList(){
      this.service.getCourseList().subscribe(d=>{this.CourseList=d;});
    }
}


