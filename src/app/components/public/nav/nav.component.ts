import { Component } from '@angular/core';
import { TranslationService } from '../../../_services/translation.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(public t: TranslationService) {}
}
