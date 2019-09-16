import { Component, OnInit } from '@angular/core';
import { ServicesAllService } from 'src/app/servicios/services-all.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popitems',
  templateUrl: './popitems.component.html',
  styleUrls: ['./popitems.component.scss'],
})
export class PopitemsComponent implements OnInit {

  getitems: any;
  constructor(private items: ServicesAllService, public popoverController: PopoverController) { }

  ngOnInit() {
    
  }

  

  clickItem(data){
    console.log(data)
    this.popoverController.dismiss({
      item: data
    });

  }

}
