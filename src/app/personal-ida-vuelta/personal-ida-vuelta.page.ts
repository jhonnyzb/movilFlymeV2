import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { NacionalEInternacionalComponent } from '../componentes/nacional-einternacional/nacional-einternacional.component';
import { PopCiudadesComponent } from '../componentes/pop-ciudades/pop-ciudades.component';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicesAllService } from '../servicios/services-all.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-personal-ida-vuelta',
  templateUrl: './personal-ida-vuelta.page.html',
  styleUrls: ['./personal-ida-vuelta.page.scss'],
})
export class PersonalIdaVueltaPage implements OnInit {

  tipoVuelo: string = '';
  textoTipoVuelo: string = 'Nac/Int'
  colorTipoTrayecto: string = '';
  ciudadOrigen: any;
  textBotonCiudadO = 'Volar desde';
  colorCiudadOrigen: string = '';
  ciudadDestino: any;
  textBotonCiudadR = 'Volando a';
  colorCiudadDestino: string = '';
  opcionesFechaIda: any;
  opcionesHoraIda: any;
  mesparcial: string = '';
  diaparcial: string = '';
  horaparcial: string = '';
  fechaida: string = '';
  colorFechaIda: string = '';
  fechaActual: string = moment().format('YYYY-MM-DD');
  optionspickersFr;
  fecha_regreso: string = '';
  fecha_actualR: any;
  colorFechaRegreso: string = '';
  horaIda: string = '';
  colorHoraIda: string = '';
  optionspickersHr;
  hora_regreso: string = '';
  horaLLegadaR: any;
  colorHoraRegreso: string = '';
  colorPasajeros: string = '';
  pasajeros: any[] = [];
  totalPasajeros: string = 'Agregar pasajeros';
  trayectoVuelo: string = 'ida_vuelta'

  constructor(public popoverController: PopoverController, public router: Router, private activatedRoute: ActivatedRoute, private servicio: ServicesAllService, private storage: Storage, public alert: AlertController) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url => {
      this.pasajeros = this.servicio.entregarPasajerosIdaVuelta();
      if (this.pasajeros.length > 0) {
        let total = this.pasajeros.length;
        this.totalPasajeros = 'Total de pasajeros: ' + total
        this.colorPasajeros = 'tertiary'
        //this.resumen.push({ item6: this.pasajeros })
        //this.storage.set('resumen', this.resumen)
      }
    });
    //this.resumen.push({ item2: this.trayectoVuelo })
    //this.storage.set('resumen', this.resumen)



//fecha ida
this.opcionesFechaIda = {
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
      this.fechaida = event.year.value + '-' + this.mesparcial + '-' + this.diaparcial;
      this.colorFechaIda = 'tertiary'
      //this.resumen.push({ item3: this.fechaida })
      //this.storage.set('resumen', this.resumen)

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
      this.colorFechaRegreso = 'tertiary'
    }
  }, {
    text: 'Cancelar',
    handler: () => {
      console.log('');
    }
  }]
}


this.opcionesHoraIda = {
  buttons: [{
    text: 'Guardar',
    handler: (event) => {
      let hora = event.hour.text;
      if (hora.length === 1) {
        this.horaparcial = '0' + hora;
      } else {
        this.horaparcial = event.hour.text;
      }
      this.horaIda = this.horaparcial + ':' + event.minute.text + ' ' + event.ampm.text;
      this.colorHoraIda = 'tertiary'
      //this.resumen.push({ item4: this.horaIda })
      //this.storage.set('resumen', this.resumen)


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
      this.colorHoraRegreso = 'tertiary';
    }
  }, {
    text: 'Cancelar',
    handler: () => {
      console.log('');
    }
  }]
}

  }






  //fin onInit
  async nacionalInternacional(evento) {

    const popover = await this.popoverController.create({
      component: NacionalEInternacionalComponent,
      event: evento,
      translucent: true
    });
    await popover.present();

    const { data } = await popover.onWillDismiss();
    this.tipoVuelo = data.tipoVuelo;
    this.textoTipoVuelo = data.tipoVuelo
    this.colorTipoTrayecto = 'tertiary'
    //this.resumen.push({ item1: this.textoTipoVuelo })
    //this.storage.set('resumen', this.resumen)

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
    this.colorCiudadOrigen = 'tertiary'
    //this.resumen.push({ item5: this.textBotonCiudadO })
    //sthis.storage.set('resumen', this.resumen)

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
    this.colorCiudadDestino = 'tertiary';
  }


  agregarPasajero(idaOvuelta) {
    if (idaOvuelta == 1) {
      if (this.textoTipoVuelo == 'internacional') {
        this.router.navigate(['/agregar-pasajeros'], { queryParams: { pasaporte: 1 } })
      }
      else {
        this.router.navigate(['/agregar-pasajeros'], { queryParams: { pasaporte: 2 } })
      }
    }
    if (idaOvuelta == 2) {
      if (this.textoTipoVuelo == 'internacional') {
        this.router.navigate(['/agregar-pasajeros'], { queryParams: { pasaporte: 3 } })
      }
      else {
        this.router.navigate(['/agregar-pasajeros'], { queryParams: { pasaporte: 4 } })
      }
    }


  }


  sendSolicitud(){
    this.storage.get('datos').then(
      (res: any) => {
        let solicitud = {
          sessionId: res.sessionId,
          fechaSolicitud: moment().format('YYYY-MM-DD'),
          tipoVuelo: this.tipoVuelo,
          trayectoVuelo: this.trayectoVuelo,
          tipoRegistro: 'pasaje_aereo_personal',
          fechaIda: this.fechaida,
          fechaVuelta: this.fecha_regreso,
          ciudadOrigenId: this.ciudadOrigen.ciudad_id,
          ciudadDestinoId: this.ciudadDestino.ciudad_id,
          horaSalida: this.horaIda,
          horaRegreso: this.hora_regreso,
          solicitanteId: res.solicitanteId,
          centroCostoId: res.IdCentroCosto,
          subCentroCostoId: res.idSubCentroCosto,
          mesaId: res.mesaId,
          pasajeros: this.pasajeros
        }
        console.log(solicitud)
        this.servicio.solicitudPasajepersonal(solicitud).subscribe(
          (res: any) => {
            if (res.codigoRespuesta == 0) {
              let mensaje = 'enviada con exito'
              this.presentAlert(mensaje)
              this.router.navigate(['/layout'])
            }
            if (res.codigoRespuesta == 1001) {
              let mensaje = 'Errada verifique campos'
              this.presentAlert(mensaje)
              this.router.navigate(['/layout'])
            }
          },
          (err) => {
            this.presentAlertErr();
            console.log('error-2', err)
            this.router.navigate(['/layout'])
          }
        )
      }
    ).catch(

      error => {
        console.log('error sessionId no existente', error)
        this.router.navigate(['/layout'])
      }
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



  ngOnDestroy() {
    let limpiarPasajeros = [];
    this.servicio.GuardarPasajeroIdaVuelta(limpiarPasajeros)
  }
}
