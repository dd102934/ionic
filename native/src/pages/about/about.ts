import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  shootPhoto:string;

  constructor(public navCtrl: NavController,private camera: Camera) {}

  savePhoto(){
    const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
            this.shootPhoto = 'data:image/jpeg;base64,' + imageData;
        }
    );
  }
}
