import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SaasComponent } from 'src/app/modules/modals/saas/saas.component';
import { SocialMediaComponent } from 'src/app/modules/modals/social-media/social-media.component';
import { WebsiteComponent } from 'src/app/modules/modals/website/website.component';

@Component({
  selector: 'app-meet-in-class',
  templateUrl: './meet-in-class.component.html',
  styleUrls: ['./meet-in-class.component.scss'],
})
export class MeetInClassComponent {
  constructor(protected modalService: BsModalService) {}

  openWebsiteModal() {
    const bsModalRef: BsModalRef = this.modalService.show(WebsiteComponent, {
      class: 'modal-xxl',
    });
  }

  openSaasModal() {
    const bsModalRef: BsModalRef = this.modalService.show(SaasComponent, {
      class: 'modal-xxl',
    });
  }

  openSocialMediaModal() {
    const bsModalRef: BsModalRef = this.modalService.show(
      SocialMediaComponent,
      {
        class: 'modal-xxl',
      }
    );
  }
}
