import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResumenReservaPage } from './resumen-reserva.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [ResumenReservaPage]
})
export class ResumenReservaPageModule {}
