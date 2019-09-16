import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ServicesAllService } from '../servicios/services-all.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registro = {
    nombre: '',
    email: '',
    password: ''
  };

  constructor(private register: ServicesAllService, public alert: AlertController) { }

  ngOnInit() {
  }

  RegisterForm() {
    
  }

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Error',
      subHeader: 'Datos Erroneos',
      message: 'Por favor ingrese nuevamente los datos',
      buttons: ['OK']
    });
    await alert.present();
  }

  Clearform(){
    this.registro = {
      nombre: '',
      email: '',
      password: ''
    }
  }


}
