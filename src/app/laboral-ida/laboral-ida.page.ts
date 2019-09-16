import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NacionalEInternacionalComponent } from '../componentes/nacional-einternacional/nacional-einternacional.component';

@Component({
  selector: 'app-laboral-ida',
  templateUrl: './laboral-ida.page.html',
  styleUrls: ['./laboral-ida.page.scss'],
})
export class LaboralIdaPage implements OnInit {

  textoTipoVuelo: string = 'Nac/Int';
  colorTipoTrayecto: string = '';
  tipoVuelo: string = '';

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
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
    //this.resumen.push({ tipoVuelo: this.textoTipoVuelo })
    //this.storage.set('resumen', this.resumen)

  }



  

}
