import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LayoutPage } from './layout.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import ('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'sotickets',
        loadChildren: () => import ('../sotickets/sotickets.module').then(m => m.SoticketsPageModule)
      },
      {
        path: 'calendario',
        loadChildren: () => import ('../calendario/calendario.module').then(m => m.CalendarioPageModule)
      },
      {
        path: '',
        redirectTo: 'home', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutPage]
})
export class LayoutPageModule {}
