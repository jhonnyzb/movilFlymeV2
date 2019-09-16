import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServicesAllService } from '../servicios/services-all.service';
import { Storage } from '@ionic/storage';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  Usuario = {
    email: '',
    password: ''
  }
  suscriptionLogin: Subscription;
  loginCargue:boolean=false;
  loginActual: boolean=true;

  constructor( private router: Router,private slogin: ServicesAllService, public alert: AlertController, private storage: Storage) { }

  ngOnInit() {
  }
  

  LoginForm(){
    this.loginCargue = true
    this.loginActual = false

    this.suscriptionLogin = this.slogin.login(this.Usuario).subscribe(
      (res:any)=> {
        this.loginCargue = false
        this.loginActual = true
        console.log(res)
        if (res.codigoRespuesta == 0){
          this.storage.set('datos',res)
          this.router.navigate(['/layout'])
        }
        if(res.codigoRespuesta == 1001){
          this.router.navigate(['/layout'])
          this.presentAlert();
        } 
        if(res.codigoRespuesta == 1009){
          this.presentAlertErrorBackendMrChispa();
        }         
        },
      (err)=>{
       this.presentAlertErrorBackend(err)
       this.router.navigate(['/layout'])
       console.log(err)
    
      }
    )

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

  async presentAlertErrorBackend(error) {
    const alert = await this.alert.create({
      header: 'Error',
      subHeader: error,
      message: 'Por favor intentelo de nuevo',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertErrorBackendMrChispa() {
    const alert = await this.alert.create({
      header: 'Error',
      subHeader: 'servidor mr Chispa',
      message: 'Por favor intentelo mas tarde',
      buttons: ['OK']
    });
    await alert.present();
  }

  ngOnDestroy(){
    //this.suscriptionLogin.unsubscribe();

  }

}
