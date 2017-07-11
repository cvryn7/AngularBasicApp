import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>
    Hello {{name}}
  </h1>
  <p><strong>Email:</strong> {{email}}</p>
  <p><strong>Address:</strong> {{address.street}} {{address.city}} {{address.state}}</p>`,
})
export class UserComponent  {
  //property variables
  name: string; // it is good practice to use typing, here typing is string
  email: string;
  address: address; // for object type define an interface. here address interface is defined

  //This runs every time the component is rendered
  constructor() {
    this.name = 'Angular';
    this.email = 'xyz@gmail.com';
    this.address = {
      street: '12 Main st',
      city: 'Boston',
      state: 'MA'
    }
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}
