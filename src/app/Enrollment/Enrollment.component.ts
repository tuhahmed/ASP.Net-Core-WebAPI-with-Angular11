import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-Enrollment',
  templateUrl: './Enrollment.component.html',
  styleUrls: ['./Enrollment.component.scss']
})
export class EnrollmentComponent implements OnInit {

  constructor(private service:SharedService) { }

  EnrollmentList:any=[];

  ngOnInit() {
    this.refreshEnrollmentList();
  }

  refreshEnrollmentList(){
this.service.getCourseList().subscribe(data=>{this.EnrollmentList=data;});


  }
}
