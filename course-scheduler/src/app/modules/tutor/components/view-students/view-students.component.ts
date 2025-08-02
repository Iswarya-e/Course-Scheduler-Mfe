import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TutorSandbox } from '../../store/sandbox/tutor.sandbox';
import { Student, StudentDetail } from '../../../student/models/studet-details.model';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
})
export class ViewStudentsComponent implements OnInit {
  students$: Observable<Student[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;


  
  filteredCourses: Course[] = [];

  editingRowIndex: number | null = null;
  editedCourses: Course[] = [];
  courseInput: string = '';

  selectedStudent: any = null;

  courses: Course[] = [] ;

  constructor(private tutorSandbox: TutorSandbox) {
    this.students$ = this.tutorSandbox.students$;
    this.loading$ = this.tutorSandbox.loading$;
    this.error$ = this.tutorSandbox.error$;
  }

  ngOnInit() {
    this.tutorSandbox.loadAllStudents();
    this.tutorSandbox.loadCourses();
    this.tutorSandbox.course$.subscribe(courses => {
      this.courses = courses;
    });
  }

  startEdit(index: number, student: Student): void {
    this.editingRowIndex = index;
    this.selectedStudent = student;
    this.editedCourses = student.courses;
    this.courseInput = '';
    this.filterCourses();
  }

  cancelEdit(): void {
    this.editingRowIndex = null;
    this.editedCourses = [];
    this.courseInput = '';
    this.filteredCourses = [];
    this.selectedStudent = null;
  }

  saveEdit(student: Student): void {
    this.tutorSandbox.updateStudentCourses(student.id, this.editedCourses);
    this.cancelEdit();
  }

  filterCourses(): void {
    const input = this.courseInput.toLowerCase().trim();
    this.filteredCourses = this.courses.filter(
      c => c.title.toLowerCase().includes(input) && !this.editedCourses.some(ec => ec.id === c.id)
    );
  }

  addCourse(course: Course): void {
    if (!this.editedCourses.includes(course)) {
      this.editedCourses.push(course);
    }
    this.courseInput = '';
    this.filteredCourses = [];
  }

  removeCourse(course: Course): void {
    this.editedCourses = this.editedCourses.filter(c => c!== course);
  }
}

