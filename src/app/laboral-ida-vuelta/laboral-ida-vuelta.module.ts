import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LaboralIdaVueltaPage } from './laboral-ida-vuelta.page';

const routes: Routes = [
  {
    path: '',
    component: LaboralIdaVueltaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LaboralIdaVueltaPage]
})
export class LaboralIdaVueltaPageModule {}
