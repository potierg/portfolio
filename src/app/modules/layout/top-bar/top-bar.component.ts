import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  constructor(private translocoService: TranslocoService) {}

  changeLanguage(languageCode: string) {
    this.translocoService.setActiveLang(languageCode);
    localStorage.setItem('lang', languageCode);
  }
}
