import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import ('./login/login.module').then(m => m.LoginPageModule)},
  //{ path: 'registro', loadChildren: () => import ('./registro/registro.module').then(m => m.RegistroPageModule)},
  //{ path: 'sotickets', loadChildren: () => import ('./sotickets/sotickets.module').then(m => m.SoticketsPageModule)},
  { path: 'layout', loadChildren: () => import ('./layout/layout.module').then(m => m.LayoutPageModule)},
  { path: 'calendario', loadChildren: () => import ('./calendario/calendario.module').then(m => m.CalendarioPageModule)},
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'form-ticket-personal', loadChildren: './form-ticket-personal/form-ticket-personal.module#FormTicketPersonalPageModule' },
  { path: 'form-ticket-laboral', loadChildren: './form-ticket-laboral/form-ticket-laboral.module#FormTicketLaboralPageModule' },
  { path: 'cuenta', loadChildren: './cuenta/cuenta.module#CuentaPageModule' },
  { path: 'detalles-pasajes/:idAnticipo/:laboPers', loadChildren: './detalles-pasajes/detalles-pasajes.module#DetallesPasajesPageModule' },
  { path: 'personal-ida-vuelta', loadChildren: './personal-ida-vuelta/personal-ida-vuelta.module#PersonalIdaVueltaPageModule' },
  { path: 'personal-ida', loadChildren: './personal-ida/personal-ida.module#PersonalIdaPageModule' },
  //{ path: 'resumen-reserva', loadChildren: './resumen-reserva/resumen-reserva.module#ResumenReservaPageModule' },
  { path: 'agregar-pasajeros', loadChildren: './agregar-pasajeros/agregar-pasajeros.module#AgregarPasajerosPageModule' },
  { path: 'laboral-ida-vuelta', loadChildren: './laboral-ida-vuelta/laboral-ida-vuelta.module#LaboralIdaVueltaPageModule' },
  { path: 'laboral-ida', loadChildren: './laboral-ida/laboral-ida.module#LaboralIdaPageModule' },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
