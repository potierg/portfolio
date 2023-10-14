import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TabsMenuComponent } from './tabs-menu/tabs-menu.component';
import { ImgBackgroundComponent } from './img-background/img-background.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [
    TopBarComponent,
    TabsMenuComponent,
    ImgBackgroundComponent,
    MainLayoutComponent,
    CardComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    TopBarComponent,
    TabsMenuComponent,
    ImgBackgroundComponent,
    MainLayoutComponent,
    CardComponent,
  ],
})
export class LayoutModule {}
