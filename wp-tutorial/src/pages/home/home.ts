import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { WordpressProvider } from '../../providers/wordpress/wordpress';
import { Post } from '../../interfaces/wordpress';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ WordpressProvider ]
})
export class HomePage {
  posts: Post[] = [];

  constructor(
    public navCtrl: NavController,
    public wp: WordpressProvider,
    public loadingCtrl: LoadingController
    ) {}

  ionViewDidLoad(){
    let loading = this.loadingCtrl.create();
    loading.present();
    this.wp.get_Posts()
        .subscribe(data => {
            this.posts = data['posts'];
            loading.dismiss();
          });
  }

}
