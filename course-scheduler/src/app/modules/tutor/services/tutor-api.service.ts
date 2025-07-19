import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TutorDetail, TutorRegistrationDto } from '../models/tutor-detail.model';
import { LoginTutorDto } from '../models/tutor-login-dto.model';
import { LoginResponse } from '../models/tutor-login-response';
import { Course } from '../models/course.model';
import { BookingDetail, Student, StudentDetail } from '../../student/models/studet-details.model';

@Injectable({
  providedIn: 'root'
})
export class TutorApiService {
  private baseUrl = 'http://localhost:5039/api/Tutors/'; // replace with actual URL
  private authUrl = 'http://localhost:5039/api/Auth/login'
  constructor(private http: HttpClient) {}

  getAllTutors(): Observable<TutorDetail[]> {
    return this.http.get<TutorDetail[]>(this.baseUrl);
  }

  getTutorById(id: number): Observable<TutorDetail> {
    return this.http.get<TutorDetail>(`${this.baseUrl}/${id}`);
  }

  createTutor(tutor: TutorRegistrationDto): Observable<TutorDetail> {
    return this.http.post<TutorDetail>(`${this.baseUrl}register`, tutor);
  }

  updateTutor(id: number, tutor: TutorDetail): Observable<TutorDetail> {
    return this.http.put<TutorDetail>(`${this.baseUrl}/${id}`, tutor);
  }

  deleteTutor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

   loginTutor(credentials: LoginTutorDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.authUrl}`, credentials);
  }

  createCourse(course: Omit<Course, 'id'>) {
  return this.http.post<number>(`${this.baseUrl}courses`, course);
  }
   
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}courses`);
  }
  getAllStudents(): Observable<Student[]> {
  return this.http.get<[]>(`${this.baseUrl}students`);
}

getAllBookings(): Observable<BookingDetail[]> {
  return this.http.get<BookingDetail[]>(`${this.baseUrl}bookings`);
}
}
