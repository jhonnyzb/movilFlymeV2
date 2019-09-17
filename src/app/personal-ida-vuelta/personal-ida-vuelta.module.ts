import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PersonalIdaVueltaPage } from './personal-ida-vuelta.page';
import { NacionalEInternacionalComponent } from '../componentes/nacional-einternacional/nacional-einternacional.component';
import { PopCiudadesComponent } from '../componentes/pop-ciudades/pop-ciudades.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { ResumenReservaPage } from '../resumen-reserva/resumen-reserva.page';
import { ResumenReservaPageModule } from '../resumen-reserva/resumen-reserva.module';

const routes: Routes = [
  {
    path: '',
    component: PersonalIdaVueltaPage
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
  declarations: [PersonalIdaVueltaPage]
})
export class PersonalIdaVueltaPageModule {}
