import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: '1' })),
      state('out', style({ opacity: '0' })),
      transition('* => *', [animate(200)]),
    ]),
  ],
})
export class AppComponent {
  title = 'portfolio';

  oldBackgroundUrl: string = '';
  currentBackgroundUrl: string = '';
  backgrounds: { [key: string]: string } = {
    '/': '/assets/backgrounds/home.jpg',
    '/about': 'assets/backgrounds/about.png',
    '/epitech': 'assets/backgrounds/epitech.png',
    '/mobibam': 'assets/backgrounds/mobibam.png',
    '/meet-in-class': 'assets/backgrounds/meet-in-class.png',
    '/door-in': 'assets/backgrounds/door-in.png',
    '/australia': 'assets/backgrounds/australia.png',
    '/next': 'assets/backgrounds/next.png',
  };

  currentImage!: SafeStyle;
  state = 'in';
  counter = 0;
  enableAnimation = false;
  private ready = false;

  constructor(
    private translocoService: TranslocoService,
    router: Router,
    private sanitize: DomSanitizer
  ) {
    const currentLang = localStorage.getItem('lang');
    if (currentLang) {
      this.translocoService.setActiveLang(currentLang);
    }

    this.currentBackgroundUrl = this.backgrounds[window.location.pathname];
    this.toggleImg();

    router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        const url: string = event.url;
        this.currentBackgroundUrl = this.backgrounds[url];

        if (this.currentBackgroundUrl === this.oldBackgroundUrl) {
          return;
        }
        this.runAnimation();
      }
    });
  }

  runAnimation() {
    this.enableAnimation = true;
    this.counter = 0;
    this.toggleState();
  }

  toggleImg() {
    if (this.oldBackgroundUrl === this.currentBackgroundUrl) {
      return;
    }
    this.currentImage = this.sanitize.bypassSecurityTrustStyle(
      `url(${this.currentBackgroundUrl})`
    );
    this.oldBackgroundUrl = this.currentBackgroundUrl;
  }

  onDone($event: any) {
    if (this.enableAnimation) {
      if (this.counter === 1) {
        this.toggleImg();
      }
      this.toggleState();
    }
  }

  toggleState() {
    if (this.counter < 2) {
      this.state = this.state === 'in' ? 'out' : 'in';
      this.counter++;
    }
  }
}
