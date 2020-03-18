import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FavPage } from '../fav/fav';
import {Events} from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {  ActionSheetController, ToastController, LoadingController } from 'ionic-angular';
/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name:"Add"})
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  im: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events,private actionSheetCtrl: ActionSheetController,private file: File, private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
  home(){
    this.navCtrl.setRoot(HomePage);
  }
  fav(){
    this.navCtrl.setRoot(FavPage);
  }
  createEvent(event){
    console.log('Event created!')
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
  takePicture(sourceType) {
    // Create options for the Camera Dialog
    const options: CameraOptions = {
      quality: 10,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: sourceType
    }
 
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.im = base64Image;
// this.im1  =   base64img.imgSync('data:image/png;base64,...','','2');
// console.log(this.im1);
   
  
     }, (err) => {
      // Handle error
     });
    }
}
