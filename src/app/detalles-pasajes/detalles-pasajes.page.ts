import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TucuentaComponent } from '../componentes/tucuenta/tucuenta.component';
import { PopoverController } from '@ionic/angular';
import { ServicesAllService } from '../servicios/services-all.service';
import { DetalleSolicitanteComponent } from '../componentes/detalle-solicitante/detalle-solicitante.component';

@Component({
  selector: 'app-detalles-pasajes',
  templateUrl: './detalles-pasajes.page.html',
  styleUrls: ['./detalles-pasajes.page.scss'],
})
export class DetallesPasajesPage implements OnInit {

  id: string;
  laboPers: string = '';
  trayectos: any[] = [];

  solicitante = {
    name:'',
    last_name: '',
    costCenter:'',
    costSubCenter:'',
    request_date:''

  };
  k: number;


 
  
  constructor(private activatedRoute: ActivatedRoute, public popoverController: PopoverController, private servicio: ServicesAllService) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('idAnticipo');
    this.laboPers = this.activatedRoute.snapshot.paramMap.get('laboPers');

  }
  

  ngOnInit() {
  
   this.obtenerDetallesPasajes();
  }




  obtenerDetallesPasajes(){
    if (this.laboPers == 'l') {
      console.log('entro laboral')
      this.servicio.obtenerDetallesPasajesLaboral(this.id).subscribe(
        (res:any)=>{
          console.log('respuesta detalles', res);
          this.trayectos = res.trayectos;
          this.solicitante = res.solicitante;   
        },
        (erro)=>{
          console.log('error Solicita Detalles', erro)
        }
      )
    }
    if (this.laboPers == 'p') {
      console.log('entro personal')
      this.servicio.obtenerDetallesPasajesPersonal(this.id).subscribe(
        (res:any)=>{
          console.log('respuesta detalles', res);
          this.trayectos = res.trayectos;
          this.solicitante = res.solicitante;   
        },
        (erro)=>{
          console.log('error Solicita Detalles', erro)
        }
      )
    }
    
  }

  

  async detalleTrayecto(trayecto, evento) {
    const popover = await this.popoverController.create({
      component: DetalleSolicitanteComponent,
      event: evento,
      mode: 'ios',
      componentProps: { trayecto: trayecto},
      cssClass: 'popover_class',
      //backdropDismiss: false,
      translucent: true
    });
    await popover.present();
    //const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();
  }








  async presentPopoverTuCuenta(evento) {
    const popover = await this.popoverController.create({
      component: TucuentaComponent,
      event: evento,
      mode: 'ios',
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
