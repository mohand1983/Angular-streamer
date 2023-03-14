import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { IStudent } from '../interfaces/i-student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public students: Array<any>=[]
  errorMessage!: string;

  constructor(
    private _studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.getAllStudents()
  }
  getAllStudents() {
    /*this._studentService.findAll()
      .pipe(
        take(1)
      ).subscribe((students: IStudent[]) => {
        //console.log(`Got ${students.length} students`)
        //return `${students}`;
        this.students=students;
      })*/
      this._studentService.findSimpleStudentsDto().subscribe({
        next: (data) => {
          //console.log(`Got ${data.length} students`)
          this.students = data;
          
        },
        error: (err) => {
          this.errorMessage = err;
        }
      });
      
  }


}
