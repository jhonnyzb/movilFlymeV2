import { Component, OnInit, OnDestroy } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { TucuentaComponent } from '../componentes/tucuenta/tucuenta.component';
import { FormIdaVueltaLaboralComponent } from '../componentes/form-ida-vuelta-laboral/form-ida-vuelta-laboral.component';
import { FormIdaLaboralComponent } from '../componentes/form-ida-laboral/form-ida-laboral.component';
import { FormMultitrayectolaboralComponent } from '../componentes/form-multitrayectolaboral/form-multitrayectolaboral.component';
import { ServicesAllService } from '../servicios/services-all.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';


@Component({
  selector: 'app-form-ticket-laboral',
  templateUrl: './form-ticket-laboral.page.html',
  styleUrls: ['./form-ticket-laboral.page.scss'],
})
export class FormTicketLaboralPage implements OnInit, OnDestroy {

  suscriptionLaboral: Subscription;
  fecha_actual = moment().format('YYYY-MM-DD');
  fechaNacimientoMostrar: string = '';
  opcionesFechaDesembolso;
  opcionesFechaNacimiento;
  mesparcial: any;
  diaparcial:any;
  fechaDesembolso: any = '';
  fechaNacimiento: any;
  numeroViajeroFrecuente: any;
  fecha: Date = new Date();
  motivo: string ='';
  solicitarAnticipo: string = '';
  descripcion: string = '';
  valorAnticipo: number = null;
  valorAnticipoLetras: string = '';
  desembolso: string = '';
  trayecto: string = '';
  cedula: string = '';
  centroDeCosto: String = '';
  subCentroCosto: string = '';
  anticipo: boolean = false;
  trayectos: any[]= [];
  tipoVuelo: any;
  botonSoloIda: boolean = true;
  botonIdaVuelta: boolean = true;
  botonMultiTrayecto: boolean = true;
  nombre: any;


  constructor(public popoverController: PopoverController, private servicio:ServicesAllService, public alert: AlertController, private router: Router,private storage: Storage) { }

  ngOnInit() {

//fecha desembolso
this.opcionesFechaDesembolso = {
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
      this.fechaDesembolso = event.year.value + '-' + this.mesparcial + '-' + this.diaparcial;
      
    }
  }, {
    text: 'Cancelar',
    handler: () => {
      console.log('');
    }
  }]
}


//fecha nacimiento
this.opcionesFechaNacimiento = {
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
      this.fechaNacimiento = event.year.value + '-' + this.mesparcial + '-' + this.diaparcial;
      this.fechaNacimientoMostrar = this.fechaNacimiento
      
      console.log(this.fechaNacimiento)
    }
  }, {
    text: 'Cancelar',
    handler: () => {
      console.log('');
    }
  }]
}

this.obtenerDatosSolicitante();

  }


  obtenerDatosSolicitante(){
    this.storage.get('datos').then(
      (res)=>{
        this.nombre = res.nombre
        this.cedula = res.cedula,
        this.centroDeCosto = res.nombreCentroCosto,
        this.subCentroCosto = res.nombreSubCentroCosto
      }
    )
  }

  async presentPopoverTuCuenta(evento) {
    const popover = await this.popoverController.create({
      component: TucuentaComponent,
      event: evento,
      mode:'ios',
      //componentProps: { idopcion: idvalue },
      //cssClass: 'popover_class',
      //backdropDismiss: false,
      translucent: true
    });
    await popover.present();
    //const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();


  }


  async PopFormIdaVuelta() {
    this.botonSoloIda = false;
    this.botonMultiTrayecto = false;
    this.trayecto = 'ida_vuelta';
    const popover = await this.popoverController.create({
      component: FormIdaVueltaLaboralComponent,
      //componentProps: { idopcion: idvalue },
      cssClass: 'popover_class',
      //backdropDismiss: false,
      translucent: true
    });
    await popover.present();
    //const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();
    let trayectoIdaVuelta = {
      ciudadOrigen: data.infoTrayectoIdaVuelta.ciudadOrigen,
      ciudadOrigenId:data.infoTrayectoIdaVuelta. ciudadOrigenId,
      ciudadDestino: data.infoTrayectoIdaVuelta.ciudadDestino,
      ciudadDestinoId: data.infoTrayectoIdaVuelta.ciudadDestinoId,
      fechaSalida: data.infoTrayectoIdaVuelta.fechaida,
      fechaLlegada: data.infoTrayectoIdaVuelta.fechaRegreso,
      horaSalida: data.infoTrayectoIdaVuelta.horaIda,
      horaLlegada: data.infoTrayectoIdaVuelta.horaRegreso,
      solicitaPasaje: data.infoTrayectoIdaVuelta.solicitaPasaje
    }
    this.trayectos.push(trayectoIdaVuelta);      
  }



  async PopFormIda() {
    this.trayecto = 'solo_ida';
    const popover = await this.popoverController.create({
      component: FormIdaLaboralComponent,
      cssClass: 'popover_class',
      translucent: true
    });
    await popover.present();
    const { data } = await popover.onWillDismiss();
    let trayectoIda = {
      ciudadOrigen: data.infoTrayectoIda.ciudadOrigen,
      ciudadOrigenId:data.infoTrayectoIda. ciudadOrigenId,
      ciudadDestino: data.infoTrayectoIda.ciudadDestino,
      ciudadDestinoId: data.infoTrayectoIda.ciudadDestinoId,
      fechaSalida: data.infoTrayectoIda.fechaida,
      fechaLlegada: data.infoTrayectoIda.fechaRegreso,
      horaSalida: data.infoTrayectoIda.horaIda,
      horaLlegada: data.infoTrayectoIda.horaRegreso,
      solicitaPasaje: data.infoTrayectoIda.solicitaPasaje
    }
    console.log(trayectoIda)
    this.trayectos.push(trayectoIda); 
  }

  
  async PopFormMultitrayecto() {
    this.trayecto = 'multi_trayecto';
    const popover = await this.popoverController.create({
      component: FormMultitrayectolaboralComponent,
      cssClass: 'popover_class',
      translucent: true
    });
    await popover.present();
    const { data } = await popover.onWillDismiss();
    this.trayectos = data.infoMultitrayectos
    console.log(this.trayectos)
  }

  cambioMotivo(event){
    this.motivo = event.detail.value;
    console.log(this.motivo)

  }

  cambioSolicitarAnticipo(event){
    this.solicitarAnticipo = event.detail.value;
    if(event.detail.value === 'on'){
      this.anticipo = true;
    }else{
      this.anticipo = false;
    }

  }

  cambioDesembolso(event){
      this.desembolso = event.detail.value;
  }

  enviarPasajeLaboral(){

    this.storage.get('datos').then(
      (res)=>{
        let solicitudPasajeLaboral = {
          sessionId: res.sessionId,
          motivo:this.motivo,
          tipoVuelo: this.tipoVuelo,
          descripcion: this.descripcion,
          tipoRegistro: 'anticipo',
          solicitaAnticipo: this.solicitarAnticipo,
          valorAnticipo: this.valorAnticipo,
          valorAnticipoLetras: this.valorAnticipoLetras,          
          tipoDesembolso: this.desembolso,
          fechaRequeridaDesembolso: this.fechaDesembolso,
          trayectoVuelo: this.trayecto,
          numeroViajeroFrecuente: String(this.numeroViajeroFrecuente),
          solicitanteId: res.solicitanteId,
          centroCostoId: res.IdCentroCosto,
          subCentroCostoId: res.idSubCentroCosto,
          fechaSolicitud: moment().format('YYYY-MM-DD'),
          mesaId: res.mesaId,  
          trayecto: this.trayectos
        }
        console.log(solicitudPasajeLaboral);
        this.suscriptionLaboral = this.servicio.solicitudPasajeLaboral(solicitudPasajeLaboral).subscribe(
          (res:any)=>{
            console.log(res)
            if(res.codigoRespuesta === 1001){
                this.presentAlerterror()
                this.router.navigate(['/layout'])
            }else{
              this.presentAlert();    
              this.router.navigate(['/layout'])
              
            }
            
          },
          (err)=>{
            console.log(err)
          }
        )
      }
    ).catch(
      err=> console.log('error de datos localstorage')
    )
  }

  async presentAlert() {
    const alert = await this.alert.create({
      subHeader: 'Solicitud',
      message: 'enviada con exito',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlerterror() {
    const alert = await this.alert.create({
      subHeader: 'error',
      message: 'en la creacion de la solicitud',
      buttons: ['OK']
    });
    await alert.present();
  }

  cambioTipo(event) {
    this.tipoVuelo = event.detail.value;

  }


  ngOnDestroy(){
    //if (this.suscriptionLaboral.unsubscribe) {
      //this.suscriptionLaboral.unsubscribe();
    //}
      
  }
}
