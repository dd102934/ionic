import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../interfaces/wordpress';
//import 'rxjs/add/operator/map';

/*
  Generated class for the WordpressProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WordpressProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WordpressProvider Provider');
  }

    get_Posts() {
      return this.http.get<{posts:Post[]}>('https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/')
    }

    get_Article(id:number) {
      return this.http.get<Post>('https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/' + id)
    }
}
