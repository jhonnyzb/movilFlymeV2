import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-resumen-reserva',
  templateUrl: './resumen-reserva.page.html',
  styleUrls: ['./resumen-reserva.page.scss'],
})
export class ResumenReservaPage implements OnInit {

  @Input() resumen;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  
  }



  cerrar(){
    this.modalController.dismiss();

  }

}
