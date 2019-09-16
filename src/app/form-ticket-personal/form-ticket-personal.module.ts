import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormTicketPersonalPage } from './form-ticket-personal.page';
import { PopCiudadesComponent } from '../componentes/pop-ciudades/pop-ciudades.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { PopAddPasejerosPersonalComponent } from '../componentes/pop-add-pasejeros-personal/pop-add-pasejeros-personal.component';
import { TucuentaComponent } from '../componentes/tucuenta/tucuenta.component';
import { ResumenReservaPage } from '../resumen-reserva/resumen-reserva.page';
import { ResumenReservaPageModule } from '../resumen-reserva/resumen-reserva.module';

const routes: Routes = [
  {
    path: '',
    component: FormTicketPersonalPage,
    children: [
      {
        path: 'personal-ida-vuelta',
        loadChildren: () => import ('../personal-ida-vuelta/personal-ida-vuelta.module').then(m => m.PersonalIdaVueltaPageModule)
      },
      {
        path: 'personal-ida',
        loadChildren: () => import ('../personal-ida/personal-ida.module').then(m => m.PersonalIdaPageModule)
      },
      {
        path: '',
        redirectTo: 'personal-ida', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  entryComponents:[
    PopCiudadesComponent,
    PopAddPasejerosPersonalComponent,
    TucuentaComponent,
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
  declarations: [FormTicketPersonalPage]
})
export class FormTicketPersonalPageModule {}
