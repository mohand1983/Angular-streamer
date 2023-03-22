import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentsModel } from '../models/students-model';
import { StudentService } from '../services/student.service';
import { SutudentFormService } from '../services/student-form.service';

@Component({
  selector: 'app-update',
  templateUrl: './../add/add.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  public form: FormGroup = new FormGroup({})
  public student: StudentsModel | null = null

  constructor(
    private _formService:SutudentFormService,
    private _route: ActivatedRoute,
    private _studentService: StudentService
  ) { }

  ngOnInit(): void {
    console.log(this._route.snapshot.paramMap.get('id'));
    const id: number = +this._route.snapshot.paramMap.get('id')!
    this._studentService.findOne(id)
      .subscribe({
        next: (student: StudentsModel) => {
          this.student = student
          this._formService.buildForm(this.student)
          this.form=this._formService.form
          //console.log(JSON.stringify(student))
        },
        error: (error: any) => {
          console.log('Something went worong');
        }
      })
  }
  public get c(): { [key: string]: AbstractControl } {
    return this._formService.c
  }


  onSubmit(): void {
    this.student!.lastName = this.form.controls['lastName'].value;
    this.student!.firstName = this.form.controls['firstName'].value;
    this.student!.email = this.form.controls['email'].value;
    this.student!.phoneNumber = this.form.controls['phoneNumber'].value;
    this.student!.login = this.form.controls['login'].value;
    this.student!.password = this.form.controls['password'].value;
    this._studentService.update(this.student!)
      .subscribe({
        next: (response: HttpResponse<any>) => {
          console.log(`student was updated ${response.status}`)       
        },
        error: (error: any) => {
          console.log(JSON.stringify(error))
        }
      })

  }

}
