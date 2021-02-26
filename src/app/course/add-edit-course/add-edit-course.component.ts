import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.css']
})
export class AddEditCourseComponent implements OnInit {

  constructor(private service: SharedService) { }
@Input() crs:any;
courseId: string;
title: string;
cHr:number;

  ngOnInit():void {
    this.courseId= this.crs.courseId;
    this.title= this.crs.title;
    this.cHr= this.crs.cHr;
  }

  addCourse(){
    var val= {courseId: this.courseId, title:this.title, cHr:this.cHr}
    this.service.addCourse(val).subscribe(res=>{
      alert("Added Successfully!");
      //"Added Successfuly."
    });
  }
  updateCourse(){
    var val= {courseId: this.courseId, title:this.title, cHr:this.cHr}
    this.service.updateCourse(val).subscribe(res=>{
      alert("Updated Successfully!");
    });
  }



}
