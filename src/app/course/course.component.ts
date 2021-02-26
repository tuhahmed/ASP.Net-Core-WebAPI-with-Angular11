import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private service:SharedService) { }

  CourseList:any=[];

  ngOnInit() {
    this.refreshCourseList();
  }

  refreshCourseList(){
this.service.getCourseList().subscribe(data=>{this.CourseList=data;});


  }
}
