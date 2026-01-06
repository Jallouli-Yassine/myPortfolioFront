import { Component } from '@angular/core';
import { TranslationService } from '../../../_services/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public t: TranslationService) {}
}
