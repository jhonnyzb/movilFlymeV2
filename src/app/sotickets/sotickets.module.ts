import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SoticketsPage } from './sotickets.page';
import { ComponentesModule } from '../componentes/componentes.module';
import { PopitemsComponent } from '../componentes/popitems/popitems.component';

const routes: Routes = [
  {
    path: '',
    component: SoticketsPage
  }
];

@NgModule({
  entryComponents:[
    PopitemsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentesModule
  ],
  declarations: [SoticketsPage]
})
export class SoticketsPageModule {}
