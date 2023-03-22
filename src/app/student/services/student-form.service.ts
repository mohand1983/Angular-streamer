import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsModel } from '../models/students-model';

@Injectable({
  providedIn: 'root'
})
export class SutudentFormService {

  private _form: FormGroup=new FormGroup({})
  private _student:StudentsModel=new StudentsModel()

  constructor(
    private _formBuilder: FormBuilder
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
