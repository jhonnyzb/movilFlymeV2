import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-resumen-reserva',
  templateUrl: './resumen-reserva.page.html',
  styleUrls: ['./resumen-reserva.page.scss'],
})
export class ResumenReservaPage implements OnInit {

  @Input() resumen;
  pasajeros: any[] = [];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    //this.pasajeros = this.resumen[6].pasajeros;

  }



  cerrar() {
    this.modalController.dismiss();

  }

}
