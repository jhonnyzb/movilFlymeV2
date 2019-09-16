import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallesPasajesPage } from './detalles-pasajes.page';
import { TucuentaComponent } from '../componentes/tucuenta/tucuenta.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { DetalleSolicitanteComponent } from '../componentes/detalle-solicitante/detalle-solicitante.component';

const routes: Routes = [
  {
    path: '',
    component: DetallesPasajesPage
  }
];

@NgModule({
  entryComponents:[
    TucuentaComponent,
    DetalleSolicitanteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentesModule
  ],
  declarations: [DetallesPasajesPage]
})
export class DetallesPasajesPageModule {}
