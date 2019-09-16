import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tucuenta',
  templateUrl: './tucuenta.component.html',
  styleUrls: ['./tucuenta.component.scss'],
})
export class TucuentaComponent implements OnInit {

  constructor(private router: Router, public popoverController: PopoverController,private storage: Storage) { }

  ngOnInit() {}


  logout(){

    this.popoverController.dismiss();
    this.storage.clear().then(
      (res)=>{
        this.router.navigate(['/login']);
      }
    )
   
    
    
  }
  CuentaPersonal(){
    this.popoverController.dismiss();
    this.router.navigate(['/cuenta']);
  }

}
