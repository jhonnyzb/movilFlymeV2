import { Component, OnInit, OnDestroy } from '@angular/core';
import { PopoverController, AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { NacionalEInternacionalComponent } from '../componentes/nacional-einternacional/nacional-einternacional.component';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicesAllService } from '../servicios/services-all.service';
import { PopCiudadesComponent } from '../componentes/pop-ciudades/pop-ciudades.component';
import { ResumenReservaPage } from '../resumen-reserva/resumen-reserva.page';

@Component({
  selector: 'app-personal-ida',
  templateUrl: './personal-ida.page.html',
  styleUrls: ['./personal-ida.page.scss'],
})
export class PersonalIdaPage implements OnInit, OnDestroy {

  tipoVuelo: string = '';
  textoTipoVuelo: string = 'Nac/Int'
  colorTipoTrayecto: string = '';
  colorFechaIda: string = '';
  colorHoraIda: string = '';
  colorPasajeros: string = '';
  colorCiudadOrigen: string = '';
  opcionesFechaIda: any;
  opcionesHoraIda: any;
  mesparcial: string = '';
  diaparcial: string = '';
  horaparcial: string = '';
  horaIda: string = '';
  fechaida: string = '';
  fechaActual: string = moment().format('YYYY-MM-DD');
  pasajeros: any[] = [];
  totalPasajeros: string = 'Agregar pasajeros'
  trayectoVuelo: string = 'solo_ida'
  fechaRegreso: string = ''
  horaRegreso: string = ''
  textBotonCiudadO = 'Volar desde';
  ciudadOrigen: any;
  ciudadDestino: any;
  textBotonCiudadR = 'Volando a';
  colorCiudadDestino: string = '';
  datosResumen = {
    tipoTrayecto: '',
    fechaIda:'',
    horaIda: '',
    tipoVuelo:'',
    ciudadOrigen:'',
    ciudadDestino:''
  };
  loaderToShow:any;


  constructor(public popoverController: PopoverController, private activatedRoute: ActivatedRoute, private storage: Storage, public router: Router, private servicio: ServicesAllService, public alert: AlertController, private modalController: ModalController) {

  }



  ngOnInit() {
   
    this.activatedRoute.url.subscribe(url => {
      this.pasajeros = this.servicio.entregarPasajeros();
      if (this.pasajeros.length > 0) {
        let total = this.pasajeros.length;
        this.totalPasajeros = 'Total de pasajeros: ' + total
        this.colorPasajeros = 'tertiary'
      }
    });
    this.datosResumen.tipoTrayecto = this.trayectoVuelo
   
   

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
          this.datosResumen.fechaIda = this.fechaida;
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('');
        }
      }]
    }


    //hora ida
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
          this.datosResumen.horaIda = this.horaIda;
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('');
        }
      }]
    }

  }




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
    this.datosResumen.tipoVuelo = this.tipoVuelo;
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
    this.datosResumen.ciudadOrigen = this.ciudadOrigen;
  
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
    this.datosResumen.ciudadDestino = this.ciudadDestino;
  }


  sendSolicitud() {
  
    this.storage.get('datos').then(
      (res: any) => {
        let solicitud = {
          sessionId: res.sessionId,
          fechaSolicitud: moment().format('YYYY-MM-DD'),
          tipoVuelo: this.tipoVuelo,
          trayectoVuelo: this.trayectoVuelo,
          tipoRegistro: 'pasaje_aereo_personal',
          fechaIda: this.fechaida,
          fechaVuelta: this.fechaRegreso,
          ciudadOrigenId: this.ciudadOrigen.ciudad_id,
          ciudadDestinoId: this.ciudadDestino.ciudad_id,
          horaSalida: this.horaIda,
          horaRegreso: this.horaRegreso,
          solicitanteId: res.solicitanteId,
          centroCostoId: res.IdCentroCosto,
          subCentroCostoId: res.idSubCentroCosto,
          mesaId: res.mesaId,
          pasajeros: this.pasajeros
        }
        console.log(solicitud)
        this.servicio.solicitudPasajepersonal(solicitud).subscribe(
          (res: any) => {
            
            console.log(res)
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



  async resumenReserva() {
    const modal = await this.modalController.create({
      component: ResumenReservaPage,
      componentProps: {
        resumen: this.datosResumen
      }
    });
    return await modal.present();
  }



  ngOnDestroy() {
    
    let limpiarPasajeros = [];
    this.servicio.GuardarPasajero(limpiarPasajeros)
  }
}
