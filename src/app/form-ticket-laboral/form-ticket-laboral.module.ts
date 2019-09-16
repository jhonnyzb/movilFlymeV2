import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormTicketLaboralPage } from './form-ticket-laboral.page';
import { TucuentaComponent } from '../componentes/tucuenta/tucuenta.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { FormIdaVueltaLaboralComponent } from '../componentes/form-ida-vuelta-laboral/form-ida-vuelta-laboral.component';
import { FormIdaLaboralComponent } from '../componentes/form-ida-laboral/form-ida-laboral.component';
import { FormMultitrayectolaboralComponent } from '../componentes/form-multitrayectolaboral/form-multitrayectolaboral.component';

const routes: Routes = [
  {
    path: '',
    component: FormTicketLaboralPage
  }
];

@NgModule({
  entryComponents:[
    TucuentaComponent,
    FormIdaVueltaLaboralComponent,
    FormIdaLaboralComponent,
    FormMultitrayectolaboralComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentesModule
  ],
  declarations: [FormTicketLaboralPage]
})
export class FormTicketLaboralPageModule {}
