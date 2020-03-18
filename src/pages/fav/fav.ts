import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AddPage } from '../add/add';

/**
 * Generated class for the FavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"Fav"
})
@Component({
  selector: 'page-fav',
  templateUrl: 'fav.html',
})
export class FavPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavPage');
  }
  home(){
    this.navCtrl.setRoot(HomePage);
  }

  add(){
    this.navCtrl.push(AddPage);
 }

}
