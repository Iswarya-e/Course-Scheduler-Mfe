import { Course } from "../../tutor/models/course.model";

export interface RegisterStudentDto {
  firstName: string;
  lastName: string;
  schoolName: string;
  contactNo: string;
  grade: string;
  gender: string;
  dob: string;  // ISO string
  email: string;
  password: string;
  courseIds: number[]; // Array of course IDs the student is registering for
}

export interface StudentDetail {
  id?: number;
  userId?: number;
  firstName: string;
  lastName: string;
  schoolName: string;
  contactNo: string;
  grade: string;
  gender: string;
  dob: string;  // ISO string
  address: string;
  email: string;
  token?:string
}
export interface LoginDto {
  email: string;
  password: string;
}

export interface BookingDto {
  id: number;
  courseId: number;
  timeSlotId: number;
  date: string;
  bookedAt: string;
}


export interface RetrieveBookingDto {
  id: number;                // Booking ID
  courseId: number;
  courseTitle: string;
  courseDescription: string;
  date: string;              // ISO date string (e.g., "2025-07-19")
  timeSlotId: number;
  startTime: string;         // "HH:mm" format
  bookedAt: string;          // ISO date-time string
  startTimeString: string; // e.g. "09:00 AM"
}


export interface TimeSlot {
  id: number;
  startTime: string;  // e.g. "09:00:00"
  startTimeString: string; // e.g. "09:00 AM"
}

export interface Student {
  id: number;
  email: string;
  studentDetail: StudentDetail;
  courses: Course[]; // Courses the student is enrolled in
}
export interface StudentWithBookings {
  id: number;
  email: string;
  studentDetail: StudentDetail;

  bookings: BookingDetail[];  // All courses booked by this student
}


export interface BookingDetail {
  id: number;
  studentId: number;
  courseId: number;
  date: string; // ISO date string
  timeSlotId: number;
  bookedAt: string; // ISO date string

  course?: Course;
  timeSlot?: TimeSlot;
  student?:Student
}