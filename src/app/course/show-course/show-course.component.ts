import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-course',
  templateUrl: './show-course.component.html',
  styleUrls: ['./show-course.component.css']
})
export class ShowCourseComponent implements OnInit {
  

  constructor(private service:SharedService) { }

  CourseList:any=[];

ModelTitle: string;
ActivateAddEditCourse: boolean=false;
crs:any;


CourseIdFilter: string="";
CourseTitleFilter: string="";
CourseCHrFilter: string="";
CourseListWithoutFilter:any=[];
  ngOnInit() {
    this.refreshCourseList();
  }
 
  addClick(){
    this.crs={
            courseId:0,
            title:"",            
            cHr:0,
            enrollment:[]
            
    }
    this.ModelTitle="Add Course";
    this.ActivateAddEditCourse=true;
  }
  closeClick(){
    this.ActivateAddEditCourse=false;
    this.refreshCourseList();
 }

 editClick(item){
this.crs=item;
this.ModelTitle="Edit Course";
this.ActivateAddEditCourse=true;

 }

deleteClick(item){
  if(confirm("Are you sure want to delete this course record?"))
  {
    //this.ModelTitle="Delete Course";
    this.service.deleteCourse(item.courseId).subscribe(res=>{
      alert("Deleted Successfully!");
      this.refreshCourseList();
    });
  }
  this.closeClick();
   }
  refreshCourseList(){
    this.service.getCourseList().subscribe(data=>{this.CourseList=data;
      this.CourseListWithoutFilter=data;});  
    
    }

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
}
