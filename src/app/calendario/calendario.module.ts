import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalendarioPage } from './calendario.page';
import { TucuentaComponent } from '../componentes/tucuenta/tucuenta.component';
import { ComponentesModule } from '../componentes/componentes.module';

const routes: Routes = [
  {
    path: '',
    component: CalendarioPage
  }
];

@NgModule({
  entryComponents:[
  TucuentaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentesModule
  ],
  declarations: [CalendarioPage]
})
export class CalendarioPageModule {}
