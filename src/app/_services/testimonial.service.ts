import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Testimonial } from '../_models/testimonial';
import { TESTIMONIALS_DATA } from '../_data/data';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor() { }

  /**
   * Récupère tous les témoignages depuis les données statiques
   * Pour modifier les témoignages, éditez le fichier src/app/_data/data.ts
   */
  getTestimonials(): Observable<Testimonial[]> {
    return of(TESTIMONIALS_DATA);
  }

  /**
   * Récupère les témoignages par note minimale
   */
  getTestimonialsByMinRating(minRating: number): Observable<Testimonial[]> {
    const filteredTestimonials = TESTIMONIALS_DATA.filter(t => t.rating >= minRating);
    return of(filteredTestimonials);
  }

  /**
   * Récupère les témoignages les plus récents
   */
  getRecentTestimonials(count: number = 5): Observable<Testimonial[]> {
    const sortedTestimonials = [...TESTIMONIALS_DATA]
      .sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      })
      .slice(0, count);
    return of(sortedTestimonials);
  }

  /**
   * Calcule la note moyenne des témoignages
   */
  getAverageRating(): Observable<number> {
    const totalRating = TESTIMONIALS_DATA.reduce((sum, t) => sum + t.rating, 0);
    const average = TESTIMONIALS_DATA.length > 0 ? totalRating / TESTIMONIALS_DATA.length : 0;
    return of(Math.round(average * 10) / 10);
  }
}
