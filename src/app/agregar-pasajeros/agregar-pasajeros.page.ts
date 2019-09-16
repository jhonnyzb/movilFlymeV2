import { Component, OnInit } from '@angular/core';
import { TucuentaComponent } from '../componentes/tucuenta/tucuenta.component';
import { PopoverController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ServicesAllService } from '../servicios/services-all.service';

@Component({
  selector: 'app-agregar-pasajeros',
  templateUrl: './agregar-pasajeros.page.html',
  styleUrls: ['./agregar-pasajeros.page.scss'],
})
export class AgregarPasajerosPage implements OnInit {

  Pasaporte: boolean = false;
  tipoDocumento: string = '';
  numeroDocumento: string = '';
  nombres: string = '';
  apellidos: string = '';
  pasaporte: string = '';
  fecha_nacimiento: string = '';
  mesparcial: string = '';
  diaparcial: string = '';
  opcionesFechaNacimiento: any;
  opcionesFechapasaporte: any;
  fechaVencimiento: string = "";
  pasajeros: any[] = [];
  k: any;
  formRetornoDatos: any = '';

  constructor(public popoverController: PopoverController, private route: ActivatedRoute, public router: Router , private servicio: ServicesAllService) {

  }

  ngOnInit() {


    this.route.queryParams.subscribe(respuesta => {
      if (respuesta.pasaporte == 1) {
        this.Pasaporte = true;
        this.formRetornoDatos = 'ida'
      }
      if (respuesta.pasaporte == 2) {
        this.Pasaporte = false;
        this.formRetornoDatos = 'ida'
      }
      if (respuesta.pasaporte == 3) {
        this.Pasaporte = true;
        this.formRetornoDatos = 'idaYvuelta'
      }
      if (respuesta.pasaporte == 4) {
        this.Pasaporte = false;
        this.formRetornoDatos = 'idaYvuelta'
      }
      

    });



    //fecha nacimiento
    this.opcionesFechaNacimiento = {
      buttons: [{
        text: 'Guardar',
        handler: (event) => {
          let mest = String(event.month.value);
          let diat = String(event.day.value);
          if (mest.length === 1) {
            this.mesparcial = '0' + mest;
          } else {
            this.mesparcial = event.month.value;
          }
          if (diat.length === 1) {
            this.diaparcial = '0' + diat;
          } else {
            this.diaparcial = event.day.value;
          }
          this.fecha_nacimiento = event.year.value + '-' + this.mesparcial + '-' + this.diaparcial;
  

        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('');
        }
      }]
    }



     //fecha vencimiento
     this.opcionesFechapasaporte = {
      buttons: [{
        text: 'Guardar',
        handler: (event) => {
          let mest = String(event.month.value);
          let diat = String(event.day.value);
          if (mest.length === 1) {
            this.mesparcial = '0' + mest;
          }else{
            this.mesparcial = event.month.value;
          }
          if (diat.length === 1) {
            this.diaparcial = '0' + diat;
          }else{
            this.diaparcial = event.day.value;
          }
          this.fechaVencimiento = event.year.value + '-' + this.mesparcial + '-' + this.diaparcial;
          
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('');
        }
      }]
    }
  }


  cambioTipoDocumento(tipoDocumento) {
    this.tipoDocumento = tipoDocumento.detail.value;
  }


  guardarPasajero() {
    let pasajero = {
      tipoDocumento: this.tipoDocumento,
      documentoPasajero: String(this.numeroDocumento),
      nombres: this.nombres,
      apellidos: this.apellidos,
      fechaNacimiento: this.fecha_nacimiento,
      pasaporte: this.pasaporte,
      fechaVencimientoPasaporte: this.fechaVencimiento
    }

    this.pasajeros.push(pasajero)
    this.numeroDocumento = '';
    this.nombres = ''
    this.apellidos = ''
    this.fecha_nacimiento = ''
    this.pasaporte ='';
    this.fechaVencimiento ='';
  

  }


  borrarPasajero(indice){
    this.pasajeros.splice(indice, 1);

  }

  retornarPasajero(){

   if (this.formRetornoDatos =='ida') {
    this.servicio.GuardarPasajero(this.pasajeros)
    this.router.navigate(['/form-ticket-personal/personal-ida'])
   }
   if (this.formRetornoDatos =='idaYvuelta') {
    this.servicio.GuardarPasajeroIdaVuelta(this.pasajeros)
    this.router.navigate(['/form-ticket-personal/personal-ida-vuelta'])
   }
    
  }



  async presentPopoverTuCuenta(evento) {
    const popover = await this.popoverController.create({
      component: TucuentaComponent,
      event: evento,
      mode: 'ios',
      //componentProps: { idopcion: idvalue },
      //cssClass: 'popover_class',
      //backdropDismiss: false,
      translucent: true
    });
    await popover.present();
    //const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();
  }
}
