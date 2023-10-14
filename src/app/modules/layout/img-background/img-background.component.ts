import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-background',
  templateUrl: './img-background.component.html',
  styleUrls: ['./img-background.component.scss'],
})
export class ImgBackgroundComponent {
  @Input() url: string = '';
}
