import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { CourseComponent } from './course/course.component';
import { AddEditStudentComponent } from './student/add-edit-student/add-edit-student.component';
import { AddEditCourseComponent } from './course/add-edit-course/add-edit-course.component';
import { ShowStudentComponent } from './student/show-student/show-student.component';
import { ShowCourseComponent } from './course/show-course/show-course.component';
import {SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EnrollmentComponent } from './Enrollment/Enrollment.component';
import { AddEditEnrollmentComponent } from './Enrollment/add-edit-enrollment/add-edit-enrollment.component';
import { ShowEnrollmentComponent } from './Enrollment/show-enrollment/show-enrollment.component';

@NgModule({
  declarations: [			
    AppComponent,
      StudentComponent,
      CourseComponent,
      ShowStudentComponent,
      ShowCourseComponent,
      AddEditStudentComponent,
      AddEditCourseComponent,
      EnrollmentComponent,
      AddEditEnrollmentComponent,
      ShowEnrollmentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
