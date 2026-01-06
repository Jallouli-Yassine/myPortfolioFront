import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skill } from '../_models/skills';
import { SKILLS_DATA, SKILL_IMAGE_OPTIONS } from '../_data/data';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  /**
   * Récupère toutes les compétences depuis les données statiques
   * Pour modifier les compétences, éditez le fichier src/app/_data/data.ts
   */
  getSkills(): Observable<Skill[]> {
    return of(SKILLS_DATA);
  }

  /**
   * Récupère les options d'images disponibles pour les compétences
   */
  getPicsSkills(): Observable<string[]> {
    return of(SKILL_IMAGE_OPTIONS);
  }

  /**
   * Récupère les compétences par catégorie
   */
  getSkillsByCategory(category: Skill['category']): Observable<Skill[]> {
    const filteredSkills = SKILLS_DATA.filter(s => s.category === category);
    return of(filteredSkills);
  }

  /**
   * Récupère les compétences par niveau de compétence
   */
  getSkillsByProficiency(proficiency: Skill['proficiency']): Observable<Skill[]> {
    const filteredSkills = SKILLS_DATA.filter(s => s.proficiency === proficiency);
    return of(filteredSkills);
  }

  /**
   * Récupère uniquement les outils (category = 'Tool')
   */
  getTools(): Observable<Skill[]> {
    const tools = SKILLS_DATA.filter(s => s.category === 'Tool');
    return of(tools);
  }

  /**
   * Récupère les compétences techniques (sans les outils)
   */
  getTechnicalSkills(): Observable<Skill[]> {
    const skills = SKILLS_DATA.filter(s => s.category !== 'Tool');
    return of(skills);
  }
}
