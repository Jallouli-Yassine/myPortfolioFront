import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../_models/project';
import { PROJECTS_DATA } from '../_data/data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  /**
   * Récupère tous les projets depuis les données statiques
   * Pour modifier les projets, éditez le fichier src/app/_data/data.ts
   */
  getProjects(): Observable<Project[]> {
    return of(PROJECTS_DATA);
  }

  /**
   * Récupère un projet par son titre
   */
  getProjectByTitle(title: string): Observable<Project | undefined> {
    const project = PROJECTS_DATA.find(p => p.title === title);
    return of(project);
  }

  /**
   * Récupère les projets par type (static ou dynamic)
   */
  getProjectsByType(type: 'static' | 'dynamic'): Observable<Project[]> {
    const filteredProjects = PROJECTS_DATA.filter(p => p.type === type);
    return of(filteredProjects);
  }

  /**
   * Récupère les projets hébergés
   */
  getHostedProjects(): Observable<Project[]> {
    const hostedProjects = PROJECTS_DATA.filter(p => p.hosted);
    return of(hostedProjects);
  }
}
