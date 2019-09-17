import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController, ModalController } from '@ionic/angular';
import { PopCiudadesComponent } from '../componentes/pop-ciudades/pop-ciudades.component';
import { PopAddPasejerosPersonalComponent } from '../componentes/pop-add-pasejeros-personal/pop-add-pasejeros-personal.component';
import { ServicesAllService } from '../servicios/services-all.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { TucuentaComponent } from '../componentes/tucuenta/tucuenta.component';
import * as moment from 'moment'
import { ResumenReservaPage } from '../resumen-reserva/resumen-reserva.page';



@Component({
  selector: 'app-form-ticket-personal',
  templateUrl: './form-ticket-personal.page.html',
  styleUrls: ['./form-ticket-personal.page.scss'],
})
export class FormTicketPersonalPage implements OnInit {

  fecha_actualI: any;
  fecha_actualR: any;
  horaIdaI: any;
  horaLLegadaR: any;
  fecha_actual: Date = new Date();
  optionspickers;
  optionspickersH;
  optionspickersFr;
  optionspickersHr;
  ciudadOrigen: any;
  ciudadDestino: any;
  tipoVuelo: string = '';
  trayecto: string = '';
  textBotonCiudadO = 'Click para elegir';
  textBotonCiudadR = 'Click para elegir';
  banderaTrayecto: boolean = true;
  datosPasajeros: any[] = [];
  mesparcial: string = '';
  diaparcial: string = '';
  horaparcial: string = '';
  fecha_ida: string = '';
  fecha_regreso: string = '';
  hora_ida: string = '';
  hora_regreso: string = '';
  banderapasaporte: boolean = false;
  sessionid: string = '';
  cedula: string = '';
  centroDeCosto: String = '';
  subCentroCosto: string = '';
  pasajero: any;
  nombre: any


  constructor(public popoverController: PopoverController, private servicio: ServicesAllService, public alert: AlertController, private router: Router, private storage: Storage, private modalController: ModalController) { }

  ngOnInit() {
    //fecha ida
    this.optionspickers = {
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
          this.fecha_ida = event.year.value + '-' + this.mesparcial + '-' + this.diaparcial;
          this.fecha_actualI = this.fecha_ida
          console.log(this.fecha_ida)
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('');
        }
      }]
    }

    //hora ida
    this.optionspickersH = {
      buttons: [{
        text: 'Guardar',
        handler: (event) => {
          let hora = event.hour.text;
          if (hora.length === 1) {
            this.horaparcial = '0' + hora;
          } else {
            this.horaparcial = event.hour.text;
          }
          this.hora_ida = this.horaparcial + ':' + event.minute.text + ' ' + event.ampm.text;
          this.horaIdaI = this.hora_ida;
          console.log(this.hora_ida)
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('');
        }
      }]
    }


    //fecha regreso
    this.optionspickersFr = {
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
          this.fecha_regreso = event.year.value + '-' + this.mesparcial + '-' + this.diaparcial;
          this.fecha_actualR = this.fecha_regreso
          console.log(this.fecha_regreso)
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('');
        }
      }]
    }

    //hora regreso
    this.optionspickersHr = {
      buttons: [{
        text: 'Guardar',
        handler: (event) => {
          let hora = event.hour.text;
          if (hora.length === 1) {
            this.horaparcial = '0' + hora;
          } else {
            this.horaparcial = event.hour.text;
          }
          this.hora_regreso = this.horaparcial + ':' + event.minute.text + ' ' + event.ampm.text;
          this.horaLLegadaR = this.hora_regreso
          console.log(this.hora_regreso)
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('');
        }
      }]
    }

    //this.obtenerDatosSolicitante();
  }

  // obtenerDatosSolicitante() {
  //   this.storage.get('datos').then(
  //     (res) => {
  //       this.cedula = res.cedula,
  //         this.nombre = res.nombre
  //       this.centroDeCosto = res.nombreCentroCosto,
  //         this.subCentroCosto = res.nombreSubCentroCosto
  //     }
  //   ).catch(
  //     (err) => {
  //       console.log('obtener datos local storage', err)
  //     }
  //   )
  // }


  cambioTipo(event) {
    if (event.detail.value === 'internacional') {
      this.banderapasaporte = true;
    } else {
      this.banderapasaporte = false;
    }
    this.tipoVuelo = event.detail.value;

  }

  cambioTrayecto(event) {
    if (event.detail.value === 'solo_ida') {
      this.banderaTrayecto = false;
      this.trayecto = event.detail.value
    }
    if (event.detail.value === 'ida_vuelta') {
      this.banderaTrayecto = true;
      this.trayecto = event.detail.value
    }

  }

  async presentPopoverOrigen() {

    const popover = await this.popoverController.create({
      component: PopCiudadesComponent,
      translucent: true
    });
    await popover.present();

    const { data } = await popover.onWillDismiss();
    this.ciudadOrigen = data.ciudad;
    this.textBotonCiudadO = data.ciudad.ciudad;
  }

  async presentPopoverDestino() {

    const popover = await this.popoverController.create({
      component: PopCiudadesComponent,

      translucent: true
    });
    await popover.present();
    const { data } = await popover.onWillDismiss();
    this.ciudadDestino = data.ciudad;
    this.textBotonCiudadR = data.ciudad.ciudad;
  }


  async presentPopoverAddpasajero() {

    const popover = await this.popoverController.create({
      component: PopAddPasejerosPersonalComponent,
      componentProps: { RequiredPasaporte: this.banderapasaporte },
      cssClass: 'popover_classaddPasajeros',
      translucent: true
    });
    await popover.present();
    const { data } = await popover.onWillDismiss();
    let datosPasajeros = {
      tipoDocumento: data.pasajero.tipoDocumento,
      documentoPasajero: String(data.pasajero.documentoPasajero),
      nombres: data.pasajero.nombres,
      apellidos: data.pasajero.apellidos,
      fechaNacimiento: data.pasajero.fechaNacimiento,
      pasaporte: data.pasajero.pasaporte,
      fechaVencimientoPasaporte: data.pasajero.fechaVencimientoPasaporte
    }
    this.datosPasajeros.push(datosPasajeros)

  }



  sendSolicitud() {
    this.storage.get('datos').then(
      (res) => {
        let solicitud = {
          sessionId: res.sessionId,
          fechaSolicitud: moment().format('YYYY-MM-DD'),
          tipoVuelo: this.tipoVuelo,
          trayectoVuelo: this.trayecto,
          tipoRegistro: 'pasaje_aereo_personal',
          fechaIda: this.fecha_ida,
          fechaVuelta: this.fecha_regreso,
          ciudadOrigenId: this.ciudadOrigen.ciudad_id,
          ciudadDestinoId: this.ciudadDestino.ciudad_id,
          horaSalida: this.hora_ida,
          horaRegreso: this.hora_regreso,
          solicitanteId: res.solicitanteId,
          centroCostoId: res.IdCentroCosto,
          subCentroCostoId: res.idSubCentroCosto,
          mesaId: res.mesaId,
          pasajeros: this.datosPasajeros
        }
        console.log(solicitud)
        this.servicio.solicitudPasajepersonal(solicitud).subscribe(
          (res: any) => {
            if (res.codigoRespuesta == 0) {
              let mensaje = 'enviada con exito'
              this.presentAlert(mensaje)
              this.datosPasajeros = [];
              this.router.navigate(['/layout'])
            }
            if (res.codigoRespuesta == 1001) {
              console.log(res)
              this.datosPasajeros = [];
              let mensaje = 'Errada verifique campos'
              this.presentAlert(mensaje)
              this.router.navigate(['/layout'])
            }
          },
          (err) => {
            this.presentAlertErr();
            this.datosPasajeros = [];
            console.log('error-2', err)
          }
        )

      }
    ).catch(
      error => console.log('error sessionId no existente', error)
    )
  }



  async presentAlert(mensaje) {
    const alert = await this.alert.create({
      subHeader: 'Solicitud',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }


  async presentAlertErr() {
    const alert = await this.alert.create({
      header: 'Error',
      subHeader: 'En la transaccion',
      message: 'Por favor ingrese nuevamente los datos',
      buttons: ['OK']
    });
    await alert.present();
  }


  async presentPopoverTuCuenta(evento) {
    const popover = await this.popoverController.create({
      component: TucuentaComponent,
      event: evento,
      mode: 'ios',
     
      translucent: true
    });
    await popover.present();
 
    const { data } = await popover.onWillDismiss();
  }
}
