import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-solicitante',
  templateUrl: './detalle-solicitante.component.html',
  styleUrls: ['./detalle-solicitante.component.scss'],
})
export class DetalleSolicitanteComponent implements OnInit {

  trayecto: any;

  constructor(public navParams:NavParams, public popoverController: PopoverController) { 
    this.trayecto = this.navParams.get('trayecto');
  }

  ngOnInit() {
    console.log(this.trayecto)
  }


  cerrarDetallesSolicitante(){
    this.popoverController.dismiss();

  }

}
