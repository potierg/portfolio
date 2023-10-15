import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public translocoService: TranslocoService) {
    console.log(this.translocoService.getActiveLang());
  }

  changeLanguage(languageCode: string) {
    this.translocoService.setActiveLang(languageCode);
    localStorage.setItem('lang', languageCode);
  }
}
