import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from './student/student.component';
import {CourseComponent} from './course/course.component';
import {EnrollmentComponent} from './Enrollment/Enrollment.component';

const routes: Routes = [
  {path:'student', component:StudentComponent},
  {path:'course', component:CourseComponent},
  {path:'enrollment', component:EnrollmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
