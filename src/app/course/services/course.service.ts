import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CourseType } from '../types/course-type';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly endpoint: string=`${environment.apiRootUri}course`

  constructor(
    private _httpClient: HttpClient //DI Angular
  ) { }
  /**
   * send a get request to 'http://127.0.0.1:5000/api/v1/'
   * @returns Observable<courseType>
   */

  public findAll(): Observable<CourseType[]>{
    return this._httpClient.get<CourseType[]>(
      this.endpoint
    )
  }
  
}
