import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TutorDetail, TutorRegistrationDto } from '../models/tutor-detail.model';
import { LoginTutorDto } from '../models/tutor-login-dto.model';
import { LoginResponse } from '../models/tutor-login-response';
import { Course } from '../models/course.model';
import { BookingDetail, Student, StudentDetail, TimeSlot } from '../../student/models/studet-details.model';

@Injectable({
  providedIn: 'root'
})
export class TutorApiService {
  private baseUrl = 'http://localhost:5039/api/Tutors'; // replace with actual URL
  private authUrl = 'http://localhost:5039/api/Auth'
  private courseUrl = 'http://localhost:5039/api/Course';
  constructor(private http: HttpClient) {}


  createTutor(tutor: TutorRegistrationDto): Observable<TutorDetail> {
    return this.http.post<TutorDetail>(`${this.authUrl}/register/tutor`, tutor);
  }

  loginTutor(credentials: LoginTutorDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.authUrl}/login`, credentials);
  }

  createCourse(course: Omit<Course, 'id'>) {
    return this.http.post<number>(`${this.courseUrl}/CreateCourse`, course);
  }
   
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.courseUrl}/GetAllCourses`);
  }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<[]>(`${this.baseUrl}/GetAllStudents`);
  }

  getAllBookings(): Observable<BookingDetail[]> {
    return this.http.get<BookingDetail[]>(`${this.baseUrl}/GetAllBookings`);
  }

  //unused methods
  getAllTutors(): Observable<TutorDetail[]> {
    return this.http.get<TutorDetail[]>(this.baseUrl);
  }

  getTutorById(id: number): Observable<TutorDetail> {
    return this.http.get<TutorDetail>(`${this.baseUrl}/${id}`);
  }

  updateTutor(id: number, tutor: TutorDetail): Observable<TutorDetail> {
    return this.http.put<TutorDetail>(`${this.baseUrl}/${id}`, tutor);
  }

  deleteTutor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getTimeSlots(): Observable<TimeSlot[]> {
    return this.http.get<TimeSlot[]>(`${this.courseUrl}/GetAllSlots`);
  }

  updateStudentCourses(studentId: number, courses: any[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/${studentId}/courses`, { courses });
  }
}
