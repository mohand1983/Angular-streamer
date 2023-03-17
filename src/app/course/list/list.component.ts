import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public courses: Array<any>=[]
  errorMessage!: string;
  count!:number;

  constructor(
    private _courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.getCoursesAll();
  }
  getCoursesAll() {
      this._courseService.findAll().subscribe({
        next: (data) => {
         //console.log(`Got ${data.length}`)
          this.courses = data;
          //const count=this.courses.length;
        },
        error: (err) => {
          this.errorMessage = err;
        }
      });
      
  }

  /*
  onCourseToggle(course: CourseType): void {
    console.log(`Course was toggled ${course.isSelected ? 'close all but me' : 'close me'}`)
    if (course.isSelected) {
      this.courses.filter((inCourse: CourseType) => inCourse.isSelected).forEach((inCourse: CourseType) => {
        if (course.id !== inCourse.id) {
          inCourse.isSelected = false
        }
      })
    }
  }
  */

}

