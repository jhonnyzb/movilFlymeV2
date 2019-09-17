import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PersonalIdaPage } from './personal-ida.page';
import { ComponentesModule } from '../componentes/componentes.module';
import { NacionalEInternacionalComponent } from '../componentes/nacional-einternacional/nacional-einternacional.component';
import { PopCiudadesComponent } from '../componentes/pop-ciudades/pop-ciudades.component';
import { ResumenReservaPage } from '../resumen-reserva/resumen-reserva.page';
import { ResumenReservaPageModule } from '../resumen-reserva/resumen-reserva.module';

const routes: Routes = [
  {
    path: '',
    component: PersonalIdaPage
  }
];

@NgModule({
  entryComponents:[
    NacionalEInternacionalComponent,
    PopCiudadesComponent,
    ResumenReservaPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentesModule,
    ResumenReservaPageModule
  ],
  declarations: [PersonalIdaPage]
})
export class PersonalIdaPageModule {}
