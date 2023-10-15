import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationSupportModalComponent } from './communication-support-modal/communication-support-modal.component';
import { WebIntegrationModalComponent } from './web-integration-modal/web-integration-modal.component';
import { LayoutModule } from '../layout/layout.module';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
import { WebsiteComponent } from './website/website.component';
import { SaasComponent } from './saas/saas.component';
import { SocialMediaComponent } from './social-media/social-media.component';

@NgModule({
  declarations: [
    CommunicationSupportModalComponent,
    WebIntegrationModalComponent,
    WebsiteComponent,
    SaasComponent,
    SocialMediaComponent,
  ],
  imports: [CommonModule, LayoutModule, TranslocoRootModule],
})
export class ModalsModule {}
