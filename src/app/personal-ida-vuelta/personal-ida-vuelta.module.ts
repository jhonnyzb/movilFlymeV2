import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PersonalIdaVueltaPage } from './personal-ida-vuelta.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalIdaVueltaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PersonalIdaVueltaPage]
})
export class PersonalIdaVueltaPageModule {}
