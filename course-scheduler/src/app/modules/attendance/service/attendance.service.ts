import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  private baseUrl = 'http://localhost:5039/api/attendance';

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/students/all`);
  }

  getAllTutors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/tutors/all`);
  }

  login(userId: number, courseId?: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { userId, courseId });
  }

  logout(userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, { userId });
  }
}
