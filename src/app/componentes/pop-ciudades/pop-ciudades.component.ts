import { Component, OnInit } from '@angular/core';
import { ServicesAllService } from 'src/app/servicios/services-all.service';
import { PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-pop-ciudades',
  templateUrl: './pop-ciudades.component.html',
  styleUrls: ['./pop-ciudades.component.scss'],
})
export class PopCiudadesComponent implements OnInit {

  ciudades: any[] = [];
  textoAbuscar = '';
  constructor(private servicio: ServicesAllService, public popoverController: PopoverController, private storage: Storage) { }

  ngOnInit() {

  }

  buscar(event) {
    
    this.storage.get('datos').then(
      (res) => {
        let ciudad = { sessionId: res.sessionId, ciudad: event.detail.value }
        console.log(ciudad)
        this.servicio.getCiudades(ciudad).subscribe(
          (res: any) => {
            this.ciudades = res
            console.log(res)
          },
          (err)=>{
            console.log('error en ciudad')
          }
        )
      }
    )


  }

  clickCiudad(data) {
    this.popoverController.dismiss({
      ciudad: data
    });
  }



}
