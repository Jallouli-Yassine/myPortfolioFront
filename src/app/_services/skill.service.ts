import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Skill} from "../_models/skills";

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private apiUrl = 'https://myportfolio-production-e703.up.railway.app/skill';
  //private apiUrl = 'http://localhost:3000/skill';

  constructor(private http: HttpClient) { }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/allSkills`);
  }

  getPicsSkills(): any{
    return this.http.get<any>(`${this.apiUrl}/getImageOptions`);
  }

  addSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(this.apiUrl+'/addSkill', skill);
  }
}
