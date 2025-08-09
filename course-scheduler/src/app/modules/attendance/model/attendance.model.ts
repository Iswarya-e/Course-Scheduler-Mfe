export interface Course {
  courseId: number;
  title: string;
}

export interface Student {
  id: number;
  userId: string;
  fullName: string;
  grade: string;
  courses: Course[];
  loggedInCourse: Course; // Courses the student is logged into today
  isLoggedInToday: boolean; // Indicates if the student is logged in today
}

export interface Tutor {
  id: number;
  userId: string;
  fullName: string;
  isLoggedInToday: boolean; // Indicates if the tutor is logged in today
}

export interface AttendanceState {
  students: Student[];
  tutors: Tutor[];
  loading: boolean;
  error: string | null;
}

export interface AttendanceRecord {
  id: number;
  courseId?: number; // only for students
}
