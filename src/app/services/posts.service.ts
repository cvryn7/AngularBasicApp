import {Injectable} from '@angular/core'; //needs to inject this service as a dependency
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class PostsService {
  constructor(private http: Http) {
    console.log('PostsService Initialized...');
  }

  getPosts() {
    //map is used to return an observable
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(res => res.json());
  }
}
