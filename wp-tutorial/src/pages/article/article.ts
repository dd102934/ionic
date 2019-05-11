import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { WordpressProvider } from '../../providers/wordpress/wordpress';
import { Post } from '../../interfaces/wordpress';

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment: 'article/:id',
    defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
  providers: [ WordpressProvider ]
})
export class ArticlePage {

    post: Post = {
        ID   : null,
        title : null,
        content : null,
        date : null
    };

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public http: HttpClient,
        public loadingCtrl: LoadingController,
        public wp: WordpressProvider
    ) {
    }

    ionViewDidLoad() {
        let loading = this.loadingCtrl.create();
        loading.present();

        const id = this.navParams.get('id');
        this.wp.get_Article(id)
            .subscribe(data => {
                this.post = data;
                loading.dismiss();
            });
    }

}
