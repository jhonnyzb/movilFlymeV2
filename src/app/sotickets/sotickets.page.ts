import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { ServicesAllService } from '../servicios/services-all.service';
import { PopitemsComponent } from '../componentes/popitems/popitems.component';

@Component({
  selector: 'app-sotickets',
  templateUrl: './sotickets.page.html',
  styleUrls: ['./sotickets.page.scss'],
})
export class SoticketsPage implements OnInit {

  fecha_actual_laboral: Date = new Date();
  fecha_actual_personal: Date = new Date();
  fecha_servicel: string;
  fecha_serviceP: string;
  optionspickersL;
  optionspickersP;
  t_laboral: boolean = false;
  t_personal: boolean = false;

  constructor(public popoverController: PopoverController, private servicelaboral: ServicesAllService, public alert: AlertController) { }

  ngOnInit() {

   //Laboral
   this.optionspickersL = {
    buttons: [{
      text: 'Guardar',
      handler: (event) => {
        this.fecha_servicel = event.year.value +'/'+ event.month.value+'/'+event.day.value;
        this.t_laboral = true; 
        this.t_personal = false;      
      }
    }, {
      text: 'Cancelar',
      handler: () => {
        console.log('');
      }
    }]
  }

    //personal
    this.optionspickersP = {
      buttons: [{
        text: 'Guardar',
        handler: (event) => {
          this.fecha_serviceP = event.year.value +'/'+ event.month.value+'/'+event.day.value;
          this.t_personal = true; 
          this.t_laboral = false;    
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('');
        }
      }]
    }

  }


  postFechaL() {
    
  }


  postFechaP(trayecto_:any) {
   

}


async presentPopover(event) {
  const popover = await this.popoverController.create({
    component: PopitemsComponent,
    backdropDismiss: false,
    translucent: true   
  });
  await popover.present();
  //const { data } = await popover.onDidDismiss();
  const { data } = await popover.onWillDismiss();
  this.postFechaP(data)
  
}


async presentAlert() {
  const alert = await this.alert.create({
    header: 'Solicitud',
    subHeader: 'Enviada',
    message: 'Gracias',
    buttons: ['OK']
  });
  await alert.present();
}
}


