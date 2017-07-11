import {Injectable} from '@angular/core'; //needs to inject this service as a dependency
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class PostsService {
  constructor(private http: Http) {
    console.log('PostsService Initialized...');
  }
}
