import {Component, OnInit} from '@angular/core';
import {TranslationService} from "../../../_services/translation.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  cvPath: string = '';
  safeCvUrl: SafeResourceUrl = '';

  constructor(public t: TranslationService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.updateCvPath();
    // S'abonner aux changements de langue
    this.t.currentLang$.subscribe(() => {
      this.updateCvPath();
    });
  }

  updateCvPath() {
    const lang = this.t.getLanguage();
    this.cvPath = lang === 'fr' ? 'assets/cv/cv fr.pdf' : 'assets/cv/cv ang.pdf';
    this.safeCvUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.cvPath);
  }
}
