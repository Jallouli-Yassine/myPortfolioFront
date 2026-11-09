import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'fr' | 'en';

export interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = new BehaviorSubject<Language>('en');
  currentLang$ = this.currentLang.asObservable();

  private translations: Translations = {
    // Navigation
    'nav.about': { fr: 'À propos', en: 'About Me' },
    'nav.projects': { fr: 'Projets', en: 'Projects' },
    'nav.resume': { fr: 'CV', en: 'Resume' },
    'nav.contact': { fr: 'Contact', en: 'Contact' },
    'nav.bio': { fr: 'Ingénieur logiciel spécialisé en développement Full-Stack, IA et ingénierie des données.', en: 'Software Engineer focused on Full-Stack development, AI, and Data Engineering.' },

    // Hero Section
    'hero.greeting': { fr: 'Bonjour, je suis', en: 'Hello, I\'m' },
    'hero.title': { fr: 'Ingénieur Logiciel IA & Data | Développeur Full-Stack', en: 'AI & Data Software Engineer | Full-Stack Developer' },
    'hero.bio': { fr: 'Je conçois des applications scalables et des solutions data-driven avec Angular, Spring Boot, Python, SQL, RAG et les technologies LLM.', en: 'I build scalable applications and data-driven solutions with Angular, Spring Boot, Python, SQL, RAG, and LLM technologies.' },
    'hero.viewProjects': { fr: 'Voir les Projets', en: 'View Projects' },
    'hero.myResume': { fr: 'Mon CV', en: 'My Resume' },
    'hero.scrollDown': { fr: 'Défiler', en: 'Scroll Down' },
    'hero.engineer': { fr: 'Ingénieur', en: 'Engineer' },
    'hero.projects': { fr: 'Projets', en: 'Projects' },

    // Skills Section
    'skills.whatIDo': { fr: 'Ce que je fais', en: 'What I do' },
    'skills.intro': { fr: 'Ingénieur informatique spécialisé en développement Full-Stack, IA et ingénierie des données. Je transforme des besoins métier en applications fiables, pipelines data et fonctionnalités intelligentes prêtes pour la production.', en: 'Computer Engineer focused on Full-Stack development, AI, and Data Engineering. I turn business needs into reliable applications, data pipelines, and production-ready intelligent features.' },
    'skills.mainTech': { fr: 'Technologies principales', en: 'Main technologies' },
    'skills.tools': { fr: 'Outils que j\'utilise', en: 'Tools I use' },

    // Projects Section
    'projects.title': { fr: 'Mon Portfolio', en: 'My Portfolio' },
    'projects.intro': { fr: 'Une sélection de projets Full-Stack, IA, Data et DevOps illustrant mon expérience dans la conception d\'applications utiles, scalables et prêtes pour la production.', en: 'A selection of Full-Stack, AI, Data, and DevOps projects demonstrating my experience building useful, scalable, production-ready applications.' },
    'projects.all': { fr: 'Tous les Projets', en: 'All Projects' },
    'projects.fullStack': { fr: 'Full-Stack', en: 'Full-Stack' },
    'projects.frontend': { fr: 'Frontend', en: 'Frontend' },
    'projects.liveDemo': { fr: 'Démo Live', en: 'Live Demo' },
    'projects.viewCode': { fr: 'Voir le Code', en: 'View Code' },
    'projects.live': { fr: 'En ligne', en: 'Live' },
    'projects.sourceCode': { fr: 'Code Source', en: 'Source Code' },
    'projects.count': { fr: 'Projets', en: 'Projects' },
    'projects.liveDemos': { fr: 'Démos Live', en: 'Live Demos' },
    'projects.noProjects': { fr: 'Aucun projet trouvé', en: 'No projects found' },
    'projects.noMatch': { fr: 'Aucun projet ne correspond au filtre sélectionné.', en: 'No projects match the selected filter.' },

    // Resume Section
    'resume.title': { fr: 'CV en Ligne', en: 'Online Resume' },
    'resume.download': { fr: 'Télécharger la Version PDF', en: 'Download PDF Version' },

    // Footer
    'footer.copyright': { fr: 'Tous droits réservés', en: 'All rights reserved' },

    // General
    'loading': { fr: 'Chargement...', en: 'Loading...' }
  };

  constructor() {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      this.currentLang.next(savedLang);
    }
  }

  setLanguage(lang: Language): void {
    this.currentLang.next(lang);
    localStorage.setItem('language', lang);
  }

  getLanguage(): Language {
    return this.currentLang.value;
  }

  translate(key: string): string {
    const translation = this.translations[key];
    if (translation) {
      return translation[this.currentLang.value];
    }
    return key;
  }

  toggleLanguage(): void {
    const newLang = this.currentLang.value === 'en' ? 'fr' : 'en';
    this.setLanguage(newLang);
  }
}
