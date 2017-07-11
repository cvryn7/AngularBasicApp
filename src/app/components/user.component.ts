import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId: module.id, // this is to use relative paths such as for templateUrl
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})

export class UserComponent  {
  //property variables
  name: string; // it is good practice to use typing, here typing is string
  email: string;
  address: address; // for object type define an interface. here address interface is defined
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[]; // Post interface is defined after the address interface

  //This runs every time the component is rendered
  //Inject the post service to constructor by having a post service parameter
  constructor(private postsService: PostsService) {
    this.name = 'Angular';
    this.email = 'xyz@gmail.com';
    this.address = {
      street: '12 Main st',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;

    //Since this returns an observable, we need to subscribe to it.
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleHobbies() {
    if (this.showHobbies == true) {
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }
  }

  addHobby(hobby: string){
    this.hobbies.push(hobby);
  }

  deleteHobby(i: number) {
    this.hobbies.splice(i, 1);
  }

}

interface address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}
