import { Component } from '@angular/core';
import { TranslationService, Language } from '../../_services/translation.service';

@Component({
  selector: 'app-language-toggle',
  template: `
    <div class="language-toggle" (click)="toggleLanguage()">
      <span class="flag" [class.active]="currentLang === 'fr'">🇫🇷</span>
      <div class="toggle-switch" [class.en]="currentLang === 'en'">
        <div class="toggle-ball"></div>
      </div>
      <span class="flag" [class.active]="currentLang === 'en'">🇬🇧</span>
    </div>
  `,
  styles: [`
    .language-toggle {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      padding: 8px 12px;
      border-radius: 50px;
      background: rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
    }

    .language-toggle:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .flag {
      font-size: 1.2rem;
      opacity: 0.5;
      transition: all 0.3s ease;
    }

    .flag.active {
      opacity: 1;
      transform: scale(1.1);
    }

    .toggle-switch {
      width: 36px;
      height: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      position: relative;
      transition: all 0.3s ease;
    }

    .toggle-ball {
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      position: absolute;
      top: 2px;
      left: 2px;
      transition: all 0.3s ease;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }

    .toggle-switch.en .toggle-ball {
      left: 18px;
    }
  `]
})
export class LanguageToggleComponent {
  currentLang: Language = 'en';

  constructor(private translationService: TranslationService) {
    this.translationService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }
}
