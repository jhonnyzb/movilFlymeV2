import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopCiudadesComponent } from '../pop-ciudades/pop-ciudades.component';

@Component({
  selector: 'app-form-ida-vuelta-laboral',
  templateUrl: './form-ida-vuelta-laboral.component.html',
  styleUrls: ['./form-ida-vuelta-laboral.component.scss'],
})
export class FormIdaVueltaLaboralComponent implements OnInit {

  fecha_actual: Date = new Date();
  opcionesFechaIda;
  opcionesFechaRegreso;
  opcionesHoraIda;
  opcionesHoraRegreso;
  mesparcial: any;
  diaparcial:any;
  horaparcial:any;
  horaIda:any;
  horaRegreso:any
  fechaIda: string='';
  fechaRegreso: string='';

  textBotonCiudadO = 'Click para elegir';
  textBotonCiudadR = 'Click para elegir';
  ciudadOrigen: any;
  ciudadDestino: any;
  solicitaPasaje: string = '';

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {

    //fecha ida
this.opcionesFechaIda= {
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
      this.fechaIda = event.year.value + '-' + this.mesparcial + '-' + this.diaparcial;
      
    }
  }, {
    text: 'Cancelar',
    handler: () => {
      console.log('');
    }
  }]
}


  //fecha regreso
  this.opcionesFechaRegreso= {
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
        this.fechaRegreso = event.year.value + '-' + this.mesparcial + '-' + this.diaparcial;
        
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
        }else{
          this.horaparcial = event.hour.text;
        }
        this.horaIda = this.horaparcial + ':' + event.minute.text + ' ' + event.ampm.text;
        console.log(this.horaIda)
      }
    }, {
      text: 'Cancelar',
      handler: () => {
        console.log('');
      }
    }]
  }

  //hora regreso
  this.opcionesHoraRegreso = {
    buttons: [{
      text: 'Guardar',
      handler: (event) => {
        let hora = event.hour.text;
        if (hora.length === 1) {
          this.horaparcial = '0' + hora;
        }else{
          this.horaparcial = event.hour.text;
        }
        this.horaRegreso = this.horaparcial + ':' + event.minute.text + ' ' + event.ampm.text;
        console.log(this.horaRegreso)
      }
    }, {
      text: 'Cancelar',
      handler: () => {
        console.log('');
      }
    }]
  }

  }

  //Ciudad Origen
  async presentPopoverOrigen() {

    const popover = await this.popoverController.create({
      component: PopCiudadesComponent,
      //backdropDismiss: false,
      translucent: true
    });
    await popover.present();
    
    const { data } = await popover.onWillDismiss();
    this.ciudadOrigen = data.ciudad;
    this.textBotonCiudadO = data.ciudad.ciudad;
  }

  //Ciudad Destino
  async presentPopoverDestino() {

    const popover = await this.popoverController.create({
      component: PopCiudadesComponent,
      //backdropDismiss: false,
      translucent: true
    });
    await popover.present();
    const { data } = await popover.onWillDismiss();
    this.ciudadDestino = data.ciudad;
    this.textBotonCiudadR = data.ciudad.ciudad;
  }


  cambioSolicitaPasaje(event){
      this.solicitaPasaje = event.detail.value;
  }

  enviarDetalletrayectoIdaVuelta(){
    let dataTrayectoIdaVuelta = {
      ciudadOrigen: this.ciudadOrigen.ciudad,
      ciudadOrigenId: this.ciudadOrigen.ciudad_id,
      ciudadDestino: this.ciudadDestino.ciudad,
      ciudadDestinoId: this.ciudadDestino.ciudad_id,
      fechaida: this.fechaIda,
      fechaRegreso: this.fechaRegreso,
      solicitaPasaje: this.solicitaPasaje,
      horaIda: this.horaIda,
      horaRegreso: this.horaRegreso

    }
    this.popoverController.dismiss({
      infoTrayectoIdaVuelta : dataTrayectoIdaVuelta
    });
  }

}
