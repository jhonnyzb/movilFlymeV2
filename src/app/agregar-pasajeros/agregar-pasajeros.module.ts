import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgregarPasajerosPage } from './agregar-pasajeros.page';
import { ComponentesModule } from '../componentes/componentes.module';
import { TucuentaComponent } from '../componentes/tucuenta/tucuenta.component';

const routes: Routes = [
  {
    path: '',
    component: AgregarPasajerosPage
  }
];

@NgModule({
  entryComponents:[
    TucuentaComponent, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentesModule
  ],
  declarations: [AgregarPasajerosPage]
})
export class AgregarPasajerosPageModule {}
