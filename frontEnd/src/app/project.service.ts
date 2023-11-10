import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _http:HttpClient) { }

  getProjects():Observable<any>{
    return this._http.get("http://localhost:5001/api/v1/projects/all");
  }

  deleteProject(id:any):Observable<any>{
    return this._http.delete(`http://localhost:5001/api/v1/projects/delete/${id}`)
  }

  addProject(data: any): Observable<any>{
    return this._http.post('http://localhost:5001/api/v1/projects/save', data)
  }

  getTopThreeProjects(count: number = 3):Observable<any>{
    return this._http.get('http://localhost:5001/api/v1/projects/top')
  }

  getCompletedProjects():Observable<any>{
    return this._http.get("http://localhost:5001/api/v1/projects/completed");
  }

  getTopProjects():Observable<any>{
    return this._http.get("http://localhost:5001/api/v1/projects/getTopProject");
  }
}
