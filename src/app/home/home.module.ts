import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { HomePage } from './home.page';
import { PopDetailPasajesPersonalComponent } from '../componentes/pop-detail-pasajes-personal/pop-detail-pasajes-personal.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { TucuentaComponent } from '../componentes/tucuenta/tucuenta.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  entryComponents:[
    PopDetailPasajesPersonalComponent, TucuentaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentesModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
