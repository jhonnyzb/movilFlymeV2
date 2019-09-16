import { Component, OnInit } from '@angular/core';
import { TucuentaComponent } from '../componentes/tucuenta/tucuenta.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  c2019: boolean = true;
  c2020: boolean = false;

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  segmentChanged(event){
   if (event.detail.value === '2019') {
     this.c2019 = true;
     this.c2020  = false;
   }
   if (event.detail.value === '2020') {
    this.c2019 = false;
    this.c2020  = true;
  }
   
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

}
