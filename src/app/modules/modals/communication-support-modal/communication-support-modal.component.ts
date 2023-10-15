import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-communication-support-modal',
  templateUrl: './communication-support-modal.component.html',
  styleUrls: ['./communication-support-modal.component.scss'],
})
export class CommunicationSupportModalComponent {
  constructor(public bsModalRef: BsModalRef) {}
}
