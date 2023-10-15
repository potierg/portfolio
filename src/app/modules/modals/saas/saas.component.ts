import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-saas',
  templateUrl: './saas.component.html',
  styleUrls: ['./saas.component.scss'],
})
export class SaasComponent {
  constructor(public bsModalRef: BsModalRef) {}
}
