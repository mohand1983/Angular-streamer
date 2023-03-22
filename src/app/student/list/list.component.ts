import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { StudentFormComponent } from '../dialogs/student-form/student-form.component';
import { IStudent } from '../interfaces/i-student';
import { StudentsModel } from '../models/students-model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public students: Array<any> = []
  errorMessage!: string;


  constructor(
    private _studentService: StudentService,
    private _matDialog: MatDialog

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
  /***
   * Open a dialog with form
   * if a SimpleStudent was passed, get whole student from service before open dialog
   * @todo keep dialogRef instance avoiding open miltiple dialog
   */
    public openForm(student: IStudent | null=null): void {
      if(!student){
        this._openDialog(new StudentsModel)
      }else{
        this._studentService.findOne(student.id!)
        .subscribe((completeStudent: StudentsModel)=>{
          console.log(` subscribe ${JSON.stringify(completeStudent)}`)
          this._openDialog(completeStudent)
        })
      }
    
  }
  private _openDialog(student: StudentsModel): void{
    const dialogRef = this._matDialog.open(StudentFormComponent, {
      width: '500px',
      height: '700px',
      hasBackdrop: false,
      data: {student}
    })

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log(`Got a result, do a job`)
      } else {
        console.log(`No result, lunch time`)
      }
    })

  }

  /*public byId(): void {
    this.students.sort((s1: IStudent, s2: IStudent) => (s1.id! - s2.id!) * this.byIdSortOrder)
    this.byIdSortOrder = this.byIdSortOrder * -1
    this.sortDefault = 'id'
  } 

  public byLastname(): void {
    this.students.sort((s1: IStudent, s2: IStudent) => s1.lastName.localeCompare(s2.lastName) * this.byLastNameSortOrder)
    this.byLastNameSortOrder = this.byLastNameSortOrder * -1
    this.sortDefault = 'lastName'
  }*/
  /*public updateStduent(id: any){
    let currentStduent=this.getAllStudents.find((s)=>{
      return s.id===id});

  }*/


}

