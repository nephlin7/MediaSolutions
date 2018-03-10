import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Subscriptor } from "../../app/interfaces/subscriptor.interface";

import 'rxjs/Rx';

@Injectable()
export class SubscribersService {

  FIRE_URL = 'https://mediasolutionsapp.firebaseio.com/Suscriptores.json'

  constructor ( private http:Http ){}

  newSubscriber( subscriptor:Subscriptor ){
    let body = JSON.stringify(subscriptor);
    let headers = new Headers({
      'Content-type':'application/json'
    });

    return this.http.post( this.FIRE_URL, body, {headers})
           .map(res=>{
             console.log(res.json());
             return res.json();
           })
  }
}
