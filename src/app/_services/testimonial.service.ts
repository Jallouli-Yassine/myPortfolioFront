import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Testimonial} from "../_models/testimonial";

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {


  private apiUrl = 'http://localhost:3000/testimonial';

  constructor(private http: HttpClient) { }

  getTestimonials(): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(`${this.apiUrl}/allTestimonials`);
  }

  addTestimonial(t: Testimonial): Observable<Testimonial> {
    return this.http.post<Testimonial>(this.apiUrl, t);
  }}
