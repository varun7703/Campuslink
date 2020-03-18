import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { FavPage } from '../fav/fav';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
tap=0;
  constructor(public navCtrl: NavController) {

  }
  fav(){
    this.navCtrl.setRoot(FavPage);
  }

  add(){
    this.navCtrl.push(AddPage);
  }
  eventDetails()
  {
    this.navCtrl.push("OutEvents")
  }

}
