import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take, tap } from 'rxjs';
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
  
  //Find a student by our id 
  public findOne(id: number): Observable<StudentsModel> {
    return this._httpClient.get<any>(
      this.endpoint + '/' + id
    )
    .pipe(
      tap((response: any) => {
        console.log(JSON.stringify(response))
      }),
      take(1),
      map((student: any) => student)
    )
  }



  public findByEmail(email:string): void{}
  public findByLoginOrEmail(email:string, login: string): void{}


  public add(student: IStudent): Observable<any> {
    return this._httpClient.post<IStudent>(
      this.endpoint,
      student
    ).pipe(
      take(1)
    )
  }



  public update(student: StudentsModel):Observable<HttpResponse<any>>{
    return this._httpClient.put<StudentsModel>(
      this.endpoint,
      student,
      {
        observe: 'response'
      }
    )

  }
}