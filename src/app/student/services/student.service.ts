import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { IStudent } from '../interfaces/i-student';
import { StudentsModel } from '../models/students-model';
import { environment } from './../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly endpoint: string=`${environment.apiRootUri}students`

  constructor(
    private _httpClient: HttpClient //DI Angular
  ) { }

  /**
   * send a get request to 'http://127.0.0.1:5000/api/v1/'
   * @returns Observable<IStudent>
   */

  public findAll(): Observable<IStudent[]>{
    return this._httpClient.get<IStudent[]>(
      this.endpoint
    )
  }
  public findSimpleStudents(): Observable<IStudent[]>{
    return this._httpClient.get<IStudent[]>(
      this.endpoint
    ).pipe(
      take(1),
      map((students: IStudent[]) => {
        return students.map((s: IStudent) => {
          return {id: s.id, lastName: s.lastName, firstName: s.firstName, email: s.email}
        })
      })
    )
  }

  public findSimpleStudentsDto(): Observable<IStudent[]> {
    const endPoint: string = this.endpoint + '/simple'
    return this._httpClient.get<IStudent[]>(
      endPoint
    )
  }
  
  public findOne(id:number): void{}
  public findByEmail(email:string): void{}
  public findByLoginOrEmail(email:string, login: string): void{}
  public add(student: IStudent): void{}
  public update(student: StudentsModel): void{}
  public remove(student:StudentsModel): void{}
}
