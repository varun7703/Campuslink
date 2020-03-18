import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForumPage } from '../forum/forum';
import { AddquestionPage } from '../addquestion/addquestion';

/**
 * Generated class for the InforumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name:"InForum"
  }
)
@Component({
  selector: 'page-inforum',
  templateUrl: 'inforum.html',
})
export class InforumPage {
tap=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InforumPage');
  }
  inForum()
  {
    this.navCtrl.push(ForumPage)
    this.tap=this.tap+1;

  }
  askqusetion(){
    this.navCtrl.push(AddquestionPage);
  }
}
