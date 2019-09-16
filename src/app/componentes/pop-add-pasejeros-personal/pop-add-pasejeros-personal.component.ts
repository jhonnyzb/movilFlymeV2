import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-pop-add-pasejeros-personal',
  templateUrl: './pop-add-pasejeros-personal.component.html',
  styleUrls: ['./pop-add-pasejeros-personal.component.scss'],
})
export class PopAddPasejerosPersonalComponent implements OnInit {

  optionspickers;
  optionspickerspasaporte;
  fecha_actual: Date = new Date();
  fecha_nacimiento: string = '';
  fecha_vencimiento: string ='';
  mesparcial: string = '';
  diaparcial: string = '';
  tipoDocumento: string = '';
  rpasaporte: boolean;
  fechaNacimientoMostrar: string;

  pasajero = {
    documento: null,
    nombres: '',
    apellidos: '',
    pasaporte: ''
  }

  constructor(public popoverController: PopoverController, public navParams:NavParams) {
    this.rpasaporte = this.navParams.get('RequiredPasaporte');
   }

  ngOnInit() {
    //fecha nacimiento
    this.optionspickers = {
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
          this.fecha_nacimiento = event.year.value + '-' + this.mesparcial + '-' + this.diaparcial;
          this.fechaNacimientoMostrar = this.fecha_nacimiento;
          
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('');
        }
      }]
    }

    //fecha vencimiento
    this.optionspickerspasaporte = {
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
          this.fecha_vencimiento = event.year.value + '-' + this.mesparcial + '-' + this.diaparcial;
          
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('');
        }
      }]
    }

  }


  cambioTipo(event) {
    this.tipoDocumento = event.detail.value;

  }

  sendData(){
    let data = {
      tipoDocumento: this.tipoDocumento,
      documentoPasajero: this.pasajero.documento,
      nombres: this.pasajero.nombres,
      apellidos: this.pasajero.apellidos,
      fechaNacimiento: this.fecha_nacimiento,
      pasaporte: this.pasajero.pasaporte,
      fechaVencimientoPasaporte: this.fecha_vencimiento
    }

    this.popoverController.dismiss({
      pasajero: data 
    });
  }
 
}
