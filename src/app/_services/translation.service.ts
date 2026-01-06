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
    'nav.bio': { fr: 'Ingénieur Full-Stack spécialisé en architectures cloud et microservices. Expert Angular, Spring Boot, DevOps CI/CD. Découvrez mes réalisations!', en: 'Full-Stack Engineer specialized in cloud architectures and microservices. Expert in Angular, Spring Boot, DevOps CI/CD. Discover my achievements!' },

    // Hero Section
    'hero.greeting': { fr: 'Bonjour, je suis', en: 'Hello, I\'m' },
    'hero.title': { fr: 'Ingénieur Informatique | Full-Stack Developer', en: 'Computer Engineer | Full-Stack Developer' },
    'hero.bio': { fr: 'Ingénieur Full-Stack avec expertise en Angular, Spring Boot, Docker et Azure. Je conçois des solutions scalables et performantes, de l\'architecture microservices aux pipelines CI/CD automatisés.', en: 'Full-Stack Engineer with expertise in Angular, Spring Boot, Docker and Azure. I design scalable and high-performance solutions, from microservices architecture to automated CI/CD pipelines.' },
    'hero.viewProjects': { fr: 'Voir les Projets', en: 'View Projects' },
    'hero.myResume': { fr: 'Mon CV', en: 'My Resume' },
    'hero.scrollDown': { fr: 'Défiler', en: 'Scroll Down' },
    'hero.engineer': { fr: 'Ingénieur', en: 'Engineer' },
    'hero.projects': { fr: 'Projets', en: 'Projects' },

    // Skills Section
    'skills.whatIDo': { fr: 'Ce que je fais', en: 'What I do' },
    'skills.intro': { fr: 'Ingénieur en informatique diplômé, je me spécialise dans le développement d\'applications web Full-Stack et les architectures microservices. Je maîtrise les outils DevOps modernes (Docker, Kubernetes, GitLab CI/CD) et je suis toujours motivé à apprendre de nouvelles technologies. Voici un aperçu de mes compétences techniques :', en: 'Computer Engineering graduate, I specialize in Full-Stack web application development and microservices architectures. I master modern DevOps tools (Docker, Kubernetes, GitLab CI/CD) and I\'m always motivated to learn new technologies. Here\'s an overview of my technical skills:' },
    'skills.mainTech': { fr: 'Technologies principales', en: 'Main technologies' },
    'skills.tools': { fr: 'Outils que j\'utilise', en: 'Tools I use' },

    // Projects Section
    'projects.title': { fr: 'Mon Portfolio', en: 'My Portfolio' },
    'projects.intro': { fr: 'Une vitrine de mes meilleurs travaux, présentant des applications web, des plateformes e-commerce et des projets frontend créatifs. Chaque projet représente mon engagement envers un code de qualité et une expérience utilisateur exceptionnelle.', en: 'A showcase of my best work, featuring web applications, e-commerce platforms, and creative frontend projects. Each project represents my commitment to quality code and exceptional user experience.' },
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
