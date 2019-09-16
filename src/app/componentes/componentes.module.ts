import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PopitemsComponent } from './popitems/popitems.component';
import { PopDetailPasajesPersonalComponent } from './pop-detail-pasajes-personal/pop-detail-pasajes-personal.component';
import { NgxPaginationModule} from 'ngx-pagination'
import { PopCiudadesComponent } from './pop-ciudades/pop-ciudades.component';
import { PipesModule } from '../pipes/pipes.module';
import { PopAddPasejerosPersonalComponent } from './pop-add-pasejeros-personal/pop-add-pasejeros-personal.component';
import { TucuentaComponent } from './tucuenta/tucuenta.component';
import { FormIdaVueltaLaboralComponent } from './form-ida-vuelta-laboral/form-ida-vuelta-laboral.component';
import { FormIdaLaboralComponent } from './form-ida-laboral/form-ida-laboral.component';
import { FormMultitrayectolaboralComponent } from './form-multitrayectolaboral/form-multitrayectolaboral.component';
import { DetalleSolicitanteComponent } from './detalle-solicitante/detalle-solicitante.component';
import { NacionalEInternacionalComponent } from './nacional-einternacional/nacional-einternacional.component';




@NgModule({
  entryComponents:[
    PopCiudadesComponent
  ],
  declarations: [PopitemsComponent, 
    PopDetailPasajesPersonalComponent, 
    PopCiudadesComponent, 
    PopAddPasejerosPersonalComponent, 
    TucuentaComponent,
    FormIdaVueltaLaboralComponent,
    FormIdaLaboralComponent,
    FormMultitrayectolaboralComponent,
    DetalleSolicitanteComponent,
    NacionalEInternacionalComponent
  ],
  exports:[
    PopitemsComponent,
    PopDetailPasajesPersonalComponent, 
    PopCiudadesComponent, 
    PopAddPasejerosPersonalComponent, 
    TucuentaComponent, 
    FormIdaVueltaLaboralComponent,
    FormIdaLaboralComponent,
    FormMultitrayectolaboralComponent,
    DetalleSolicitanteComponent,
    NacionalEInternacionalComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    NgxPaginationModule,
    PipesModule,
    FormsModule
  ]
})
export class ComponentesModule { }
