import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { IStudent } from '../interfaces/i-student';
import { StudentsModel } from '../models/students-model';
import { SutudentFormService } from '../services/student-form.service';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})


export class AddComponent implements OnInit {
  public form: FormGroup = new FormGroup({})
  public student: StudentsModel = new StudentsModel()

  constructor(
    private _formService: SutudentFormService,
    private _service: StudentService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.form = this._formService.form
  }
  public get c(): { [key: string]: AbstractControl } {
    return this._formService.c
  }

  public onSubmit(): void {
    this._service.add(this.form.value)
      .subscribe({
        next: (response: IStudent) => {
          this._snackBar.open('Student was created', 'ok')
        },
        error: (error: any) => {
          this._snackBar.open('Student was not created', 'not ok')

        }
      })
  }

}

