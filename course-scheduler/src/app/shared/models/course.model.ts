export interface Course {
  id: string;
  title: string;
  description: string;
  tutorId: string;
  schedule: string; // e.g. ISO string or custom format
}
