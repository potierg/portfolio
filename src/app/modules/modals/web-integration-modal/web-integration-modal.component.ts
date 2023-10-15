import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-web-integration-modal',
  templateUrl: './web-integration-modal.component.html',
  styleUrls: ['./web-integration-modal.component.scss'],
})
export class WebIntegrationModalComponent {
  constructor(public bsModalRef: BsModalRef) {}
}
