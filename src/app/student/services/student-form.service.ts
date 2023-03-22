import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { IStudent } from '../interfaces/i-student';
import { StudentsModel } from '../models/students-model';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class SutudentFormService {

  private _form: FormGroup=new FormGroup({})
  private _student:StudentsModel=new StudentsModel()

  constructor(
    private _formBuilder: FormBuilder,
    private _studentService: StudentService
  ) { 
    this._buildForm()
  }
  public buildForm(student:StudentsModel){
    this._student=student;
    this._buildForm()
  }

  /**
   * studentFormService.form <- this._form
   */
  get form(): FormGroup{
    return this._form
  }

 
  /**
   * studentFormService.getForm()
   * @returns 
   */
  getForm(): FormGroup{
    return this._form
  }

  public get c(): { [key: string]: AbstractControl } {
    return this._form.controls
  }


    //object.assign(this._student, this._form.value)
 
  public onSubmit(): Observable<any> {

    if (this._student.id) {
      this._student.lastName = this.c['lastName'].value
      this._student.firstName = this.c['firstName'].value
      this._student.email = this.c['email'].value
      this._student.phoneNumber = this.c['phoneNumber'].value
      this._student.login = this.c['login'].value
      this._student.password = this.c['password'].value
      return this._studentService.update(this._student)
      .pipe(
        map(_ => this._student)
      )
    }

    const student: IStudent = {
      lastName: this.c['lastName'].value,
      firstName: this.c['firstName'].value,
      email: this.c['email'].value,
      phoneNumber: this.c['phoneNumber'].value,
      login: this.c['login'].value,
      password: this.c['password'].value,
      isSelected: false
    }
    return this._studentService.add(student)
  }
  
  private _buildForm():void{
    this._form=this._formBuilder.group({
      lastName: [
        this._student.lastName,//Default value
        [
          Validators.required
        ]// Validators function to add to this field
      ],
      firstName: [
        this._student.firstName,//Default value
        [
          Validators.required
        ]// Validators function to add to this field
      ],
      email: [
        this._student.email,
        [
          Validators.required,
          Validators.pattern(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        ]
      ],
      phoneNumber: [
        this._student.phoneNumber,
        [

        ]
      ],
      login: [
        this._student.login,
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      password: [
        this._student.password,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)

        ]
      ]
    })
  }
}
