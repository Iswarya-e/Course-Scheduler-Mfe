export interface AttendanceRecord {
  id: number;
  studentId: number;
  fullName: string;
  schoolName: string;
  grade: string;
  courseId: number;
  courseTitle: string;
  loginTime: string;   // ISO string
  logoutTime?: string | null; // ISO string or null if not logged out yet
  totalTimeSeconds?: number | null;  // total time spent in seconds
}
