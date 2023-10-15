import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './pages/about/about.component';
import { LayoutModule } from './modules/layout/layout.module';
import { EpitechComponent } from './pages/epitech/epitech.component';
import { MobibamComponent } from './pages/mobibam/mobibam.component';
import { MeetInClassComponent } from './pages/meet-in-class/meet-in-class.component';
import { DoorInComponent } from './pages/door-in/door-in.component';
import { AustraliaComponent } from './pages/australia/australia.component';
import { NextComponent } from './pages/next/next.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { FormsModule } from '@angular/forms';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ModalsModule } from './modules/modals/modals.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EpitechComponent,
    MobibamComponent,
    MeetInClassComponent,
    DoorInComponent,
    AustraliaComponent,
    NextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    LayoutModule,
    HttpClientModule,
    TranslocoRootModule,
    FormsModule,
    ModalModule,
    ModalsModule,
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
