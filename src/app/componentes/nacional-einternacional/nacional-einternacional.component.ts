import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-nacional-einternacional',
  templateUrl: './nacional-einternacional.component.html',
  styleUrls: ['./nacional-einternacional.component.scss'],
})
export class NacionalEInternacionalComponent implements OnInit {

  nacional: string = '';
  internacional: string = '';
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}


  tipoVuelo(tipovuelo:string){
    this.popoverController.dismiss({
      tipoVuelo: tipovuelo
    });
  }

}
