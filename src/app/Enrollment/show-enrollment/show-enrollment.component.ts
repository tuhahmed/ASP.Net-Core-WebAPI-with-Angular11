import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-enrollment',
  templateUrl: './show-enrollment.component.html',
  styleUrls: ['./show-enrollment.component.scss']
})
export class ShowEnrollmentComponent implements OnInit {
  constructor(private service:SharedService) { }

  EnrollmentList:any=[];

ModelTitle: string;
ActivateAddEditEnrollment: boolean=false;
enroll:any;

/*
CourseIdFilter: string="";
CourseTitleFilter: string="";
CourseCHrFilter: string="";
CourseListWithoutFilter:any=[];
*/
  ngOnInit() {
    this.refreshEnrollmentList();
  }
 
  addClick(){
    this.enroll={
            courseId:0,
            studentId:0
    }
    this.ModelTitle="Add Course";
    this.ActivateAddEditEnrollment=true;
  }
  closeClick(){
    this.ActivateAddEditEnrollment=false;
    this.refreshEnrollmentList();
 }

 editClick(item){
this.enroll=item;
this.ModelTitle="Edit Course";
this.ActivateAddEditEnrollment=true;

 }

deleteClick(item){
  if(confirm("Are you sure want to delete this course record?"))
  {
    //this.ModelTitle="Delete Course";
    this.service.deleteEnrollment(item.courseId).subscribe(res=>{
      alert("Deleted Successfully!");
      this.refreshEnrollmentList();
    });
  }
  this.closeClick();
   }
  refreshEnrollmentList(){
    this.service.getEnrollmentList().subscribe(data=>{this.EnrollmentList=data;
     // this.CourseListWithoutFilter=data;
    });  
    
    }
/*
    FilterFn(){
var CourseIdFilter= this.CourseIdFilter;
var CourseTitleFilter= this.CourseTitleFilter;
var CourseCHrFilter= this.CourseCHrFilter;

this.CourseList= this.CourseListWithoutFilter.filter(function(el){
  return el.courseId.toString().toLowerCase().includes(
    CourseIdFilter.toString().trim().toLocaleLowerCase()) &&
    el.title.toString().toLowerCase().includes(
      CourseTitleFilter.toString().trim().toLocaleLowerCase())&&
      el.cHr.toString().toLowerCase().includes(
        CourseCHrFilter.toString().trim().toLocaleLowerCase())
});

    }

    sortResult(prop, asc){
      this.CourseList=this.CourseListWithoutFilter.sort(function (a,b){
      if(asc){
        return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
      }
      else{
        return (b[prop]>a[prop])?1:((b[prop]<a[prop]))?-1:0;
      }
    });
    }
    */
}
