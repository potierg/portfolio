import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommunicationSupportModalComponent } from 'src/app/modules/modals/communication-support-modal/communication-support-modal.component';
import { WebIntegrationModalComponent } from 'src/app/modules/modals/web-integration-modal/web-integration-modal.component';

@Component({
  selector: 'app-mobibam',
  templateUrl: './mobibam.component.html',
  styleUrls: ['./mobibam.component.scss'],
})
export class MobibamComponent {
  constructor(protected modalService: BsModalService) {}

  openSupportModal() {
    const bsModalRef: BsModalRef = this.modalService.show(
      CommunicationSupportModalComponent,
      {
        class: 'modal-xxl',
      }
    );
  }

  openIntegrationWebModal() {
    const bsModalRef: BsModalRef = this.modalService.show(
      WebIntegrationModalComponent,
      {
        class: 'modal-xxl',
      }
    );
  }
}
