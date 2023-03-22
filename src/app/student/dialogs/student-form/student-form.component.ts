import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { stringify } from 'querystring';
import { StudentsModel } from '../../models/students-model';
import { SutudentFormService } from '../../services/student-form.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  public form:FormGroup=new FormGroup({})
  private _student: StudentsModel
  
  constructor(
    public dialogRef: MatDialogRef<StudentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _sutudentFormService: SutudentFormService
  ) {

    this._student = this.data.student
  }

  ngOnInit(): void {
    console.log(`Dialog got  ${JSON.stringify(this._student)}`)
    this._sutudentFormService.buildForm(this._student)
    this.form=this._sutudentFormService.form

  }
  public get c(): { [key: string]: AbstractControl } {
    return this._sutudentFormService.c
  }
  /**
   * 
   * @returns Event triggerd if user click on the no button
   */
  public onNoClick(): void{
    return this.dialogRef.close()
  }
  /**
   * 
   * @returns Event triggerd if user click on the yes button
   */
  public onSubmit(): void{
    return this.dialogRef.close(this._student)
  }


}
