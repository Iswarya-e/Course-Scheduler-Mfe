import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BookingDto, LoginDto, RegisterStudentDto, RetrieveBookingDto, StudentDetail, TimeSlot } from "../models/studet-details.model";
import { Course } from "../../tutor/models/course.model";

@Injectable({ providedIn: 'root' })
export class StudentApiService {
  private baseUrl = 'http://localhost:5039/api/Students'; // change to your backend
  private authUrl = 'http://localhost:5039/api/Auth/login'

  constructor(private http: HttpClient) {}

  registerStudent(data: RegisterStudentDto): Observable<StudentDetail> {
    return this.http.post<StudentDetail>(`${this.baseUrl}/register`, data);
  }

  getStudentProfile(studentId: number): Observable<StudentDetail> {
    return this.http.get<StudentDetail>(`${this.baseUrl}/${studentId}/profile`);
  }

  /** Get student's bookings */
  getBookings(studentId: number): Observable<RetrieveBookingDto[]> {
    return this.http.get<RetrieveBookingDto[]>(`${this.baseUrl}/${studentId}/bookings`);
  }

  /** Schedule a course booking */
  scheduleBooking(studentId: number, data: BookingDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/${studentId}/schedule`, data);
  }

  /** Cancel a booking */
  cancelBooking(studentId: number, bookingId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${studentId}/cancel/${bookingId}`);
  }
  login(data: LoginDto): Observable<StudentDetail> {
    return this.http.post<StudentDetail>(`${this.authUrl}`, data);
  }
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/courses`);
  }

  getTimeSlots(): Observable<TimeSlot[]> {
    return this.http.get<TimeSlot[]>(`${this.baseUrl}/timeSlots`);
  }
}
