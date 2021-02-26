import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly API_URL="https://localhost:44327/api";
readonly photoUrl="https://localhost:44327/api";
constructor(private http:HttpClient) { }

getCourseList(): Observable<any[]>{
  return this.http.get<any>(this.API_URL+'/Courses');
}
addCourse(val:any){
  return this.http.post(this.API_URL+'/Courses', val);
}
updateCourse(val:any){
  return this.http.put(this.API_URL+'/Courses/'+val, val);
}
deleteCourse(val:any){
  return this.http.delete(this.API_URL+'/Courses/'+val);
}


//Student API
getStudentList(): Observable<any[]>{
  return this.http.get<any>(this.API_URL+'/Students');
}
addStudent(val:any){
  return this.http.post(this.API_URL+'/Students', val);
}
updateStudent(val:any){
  console.log('UpdateService called');
  return this.http.put(this.API_URL+'/Students/'+val.studentId.toString(), val);
}
deleteStudent(val:any){
  return this.http.delete(this.API_URL+'/Students/'+val);
}
uploadPhoto(val:any){
  return this.http.post(this.API_URL+'/Students/SaveFile', val);
}

getAllCourseTitle(val:any):Observable<any[]>{
  return this.http.get<any[]>(this.API_URL+'/Courses/GetAllCourseTitle')
}


//Enrollment API
getEnrollmentList(): Observable<any[]>{
  return this.http.get<any>(this.API_URL+'/Enrollments');
}
addEnrollment(val:any){
  return this.http.post(this.API_URL+'/Enrollments', val);
}
updateEnrollment(val:any){
  console.log('UpdateService called');
  return this.http.put(this.API_URL+'/Enrollments/'+val.studentId.toString(), val);
}
deleteEnrollment(val:any){
  return this.http.delete(this.API_URL+'/Enrollments/'+val);
}

getAllEnrollmentTitle(val:any):Observable<any[]>{
  return this.http.get<any[]>(this.API_URL+'/Enrollments/GetAllEnrollmentTitle')
}
}
