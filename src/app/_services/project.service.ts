import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Project} from "../_models/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  //private apiUrl = 'http://localhost:3000/project';
  private apiUrl = 'https://myportfolio-production-e703.up.railway.app/project';
//allProjects
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/allProjects`);
  }
  addProject(project: FormData): Observable<Project> {
    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
    return this.http.post<Project>(this.apiUrl + "/addProject", project, { headers });
  }

}
