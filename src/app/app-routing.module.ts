import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EpitechComponent } from './pages/epitech/epitech.component';
import { MobibamComponent } from './pages/mobibam/mobibam.component';
import { MeetInClassComponent } from './pages/meet-in-class/meet-in-class.component';
import { DoorInComponent } from './pages/door-in/door-in.component';
import { AustraliaComponent } from './pages/australia/australia.component';
import { NextComponent } from './pages/next/next.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'epitech',
    component: EpitechComponent,
  },
  {
    path: 'mobibam',
    component: MobibamComponent,
  },
  {
    path: 'meet-in-class',
    component: MeetInClassComponent,
  },
  {
    path: 'door-in',
    component: DoorInComponent,
  },
  {
    path: 'australia',
    component: AustraliaComponent,
  },
  {
    path: 'next',
    component: NextComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
