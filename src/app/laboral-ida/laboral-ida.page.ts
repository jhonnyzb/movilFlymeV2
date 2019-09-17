import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { NacionalEInternacionalComponent } from '../componentes/nacional-einternacional/nacional-einternacional.component';

@Component({
  selector: 'app-laboral-ida',
  templateUrl: './laboral-ida.page.html',
  styleUrls: ['./laboral-ida.page.scss'],
})
export class LaboralIdaPage implements OnInit {

  textoTipoVuelo: string = 'Nacional/Internacional';
  colorTipoTrayecto: string = '';
  tipoVuelo: string = '';
  numeroViajeroFrecuente: any;
  textoNumeroViajerpFrecuente: string = '';
  colorNumeroViajerpFrecuente: string = '';
  motivo: string ='';
  colorMotivo: string = '';
  solicitAnticipo: string = '';
  colorSolicitaAnticipo: string = '';
  descripcion_: string = 'Descripción'
  colorDescripcion: string = '';

  constructor(public popoverController: PopoverController, public alertController: AlertController) { }

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

  }

  async viajeroFrecuente() {
    const alert = await this.alertController.create({
      header: 'N° viajero frecuente',
      inputs: [
        {
          name: 'numeroViajero',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Guardar',
          handler: (res) => {
            this.numeroViajeroFrecuente = ': ' + res.numeroViajero
            this.colorNumeroViajerpFrecuente = 'tertiary'
          }
        }
      ]
    });

    await alert.present();
  }



  async motivos() {
    const alert = await this.alertController.create({
      header: 'Motivo',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'A. de elementos',
          value: 'adquisicion_elementos',
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'A. de servicios',
          value: 'adquisicion_servicios'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'A. administrativos',
          value: 'aspectos_admin'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'A. financieros',
          value: 'aspectos_financieros'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'A. legales',
          value: 'aspectos_legales'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Bienestar',
          value: 'bienestar'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Capacitacion',
          value: 'capacitacion'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Cargo Cliente',
          value: 'cargo_cliente'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Conv.vice',
          value: 'convocatoria_vicepresidencia'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Procesos',
          value: 'procesos'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Pro. lab.',
          value: 'procesos_laborales'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Prospección Clie.',
          value: 'prospeccion_clientes'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Reu. Admon.',
          value: 'reunion_administrativo'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Reu. Cliente',
          value: 'reunion_cliente'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Reu. Operaciones',
          value: 'reunion_operaciones'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Tras. Ciudad',
          value: 'traslado_ciudad'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'S. Ocupacional',
          value: 'salud_ocupacional'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Tecnologia',
          value: 'tecnologia'
        },
      ],
      buttons: [
        {
          text: 'Ok',
          handler: (res) => {
           this.motivo =  ': ' + res
           this.colorMotivo = 'tertiary'
          }
        }
      ]
    });

    await alert.present();
  }

  

  async solicitaAnticipo() {
    const alert = await this.alertController.create({
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Si',
          value: 'on',
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'No',
          value: 'off'
        }
      ],
      buttons: [
        {
          text: 'Ok',
          handler: (res) => {
            this.solicitAnticipo = ': ' + res;
            this.colorSolicitaAnticipo = 'tertiary'
          }
        }
      ]
    });

    await alert.present();
  }


  async descripcion() {
    const alert = await this.alertController.create({
      header: 'Descripción',
      inputs: [
        {
          name: 'descripcion',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Guardar',
          handler: (res) => {
            this.descripcion_= res.descripcion
           this.colorDescripcion = 'tertiary'
          }
        }
      ]
    });

    await alert.present();
  }

}
