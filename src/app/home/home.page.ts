import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServicesAllService } from '../servicios/services-all.service';
import { PopoverController } from '@ionic/angular';
import { PopDetailPasajesPersonalComponent } from '../componentes/pop-detail-pasajes-personal/pop-detail-pasajes-personal.component';
import { TucuentaComponent } from '../componentes/tucuenta/tucuenta.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  opciones: any;
  opciones_: any[];
  opcionesInternas : any[]= [];
  estado: any;
  controlPopover: number = 1;
  datosPasajes: FormGroup;

  constructor(private servicio: ServicesAllService, public popoverController: PopoverController,private Formbuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.getOpcion();
    this.buildForm()
  }


  private buildForm() {

    this.datosPasajes = this.Formbuilder.group(
      {
        tipoRegistro: [],
        estado: []
       
      }
    )
  }

  getOpcion() {
    this.servicio.opcionHomeTicket().subscribe(
      (res)=>{
        this.opciones = res
      },
      (error)=>{
        console.log('error opciones tipo registro' ,error)
      }
    )

  }

  cambio(event: any) {
    if (event.detail.value === 'anticipo') {
      this.estado = 'anticipo';
       this.opcionesInternas = [
        {
          opcion_: 'Por aprobar',
          value_: 'poraprobar',
        },
        {
          opcion_: 'Por desembolsar',
          value_: 'pordesembolsar',
        },
        {
          opcion_: 'Por legalizar',
          value_: 'porlegalizar',
        },
      ]
     
      this.opciones_ = this.opcionesInternas;
     
    }
    if (event.detail.value === 'pasaje_aereo') {
      this.estado = 'pasaje_aereo';
      this.opcionesInternas = [
        {
          opcion_: 'Por aprobar',
          value_: 'solicitado',
        },
        {
          opcion_: 'Aprobado',
          value_: 'aprobado',
        },
        {
          opcion_: 'Anulados',
          value_: 'anulado',
        },
        {
          opcion_: 'Rechazados',
          value_: 'rechazado',
        },
      ]
      this.opciones_ = this.opcionesInternas;
     
    }
    if (event.detail.value === 'pasaje_aereo_personal') {
      this.estado = 'pasaje_aereo_personal';
      this.opcionesInternas= [
        {
          opcion_: 'Solicitados',
          value_: 'solicitado',
        },
        {
          opcion_: 'Cotizados',
          value_: 'cotizado'
        },
        {
          opcion_: 'Aceptados',
          value_: 'aceptado',
        },
        {
          opcion_: 'Anulados',
          value_: 'anulado',
        },
        {
          opcion_: 'Rechazados',
          value_: 'rechazado',
        },
      ]

      this.opciones_ = this.opcionesInternas;
      
    }

  }


  cambioEstados(event) {
    if (this.controlPopover >= 2){
      this.controlPopover = 1;
    }else{  
      this.presentPopover(event.detail.value); 
      
    }
     
  }

  async presentPopover(idvalue) {
    const popover = await this.popoverController.create({
      component: PopDetailPasajesPersonalComponent,
      componentProps: { tipoRegistro: idvalue, estado: this.estado },
      cssClass: 'popover_class',
      backdropDismiss: false,
      translucent: true
    });
    await popover.present();
     await popover.onDidDismiss().then(
       res =>{
         this.controlPopover = this.controlPopover + 1
         this.datosPasajes.reset();   
       }
     )
  

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


  ngOnDestroy() {

  }

}
