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
  }
  

  ngOnInit() {
  
   this.obtenerDetallesPasajes();
  }




  obtenerDetallesPasajes(){
    this.servicio.obtenerDetallesPasajes(this.id).subscribe(
      (res:any)=>{
        console.log(res);
        this.trayectos = res.trayectos;
        this.solicitante = res.solicitante;
       
         
      },
      (erro)=>{
        console.log('error Solicita Detalles', erro)
      }
    )
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
