import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PersonalIdaPage } from './personal-ida.page';
import { ComponentesModule } from '../componentes/componentes.module';
import { NacionalEInternacionalComponent } from '../componentes/nacional-einternacional/nacional-einternacional.component';
import { PopCiudadesComponent } from '../componentes/pop-ciudades/pop-ciudades.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalIdaPage
  }
];

@NgModule({
  entryComponents:[
    NacionalEInternacionalComponent,
    PopCiudadesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentesModule
  ],
  declarations: [PersonalIdaPage]
})
export class PersonalIdaPageModule {}
