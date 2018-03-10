import { Component, OnInit } from '@angular/core';
import { SubscribersService } from '../../services/subscribers.service';
import { Subscriptor } from '../../interfaces/subscriptor.interface';

@Component({
  selector: 'app-soon',
  templateUrl: './soon.component.html',
  styleUrls: ['./soon.component.css']
})

export class SoonComponent implements OnInit {
  bussinessName = 'Media Solutions';
  year = new Date().getFullYear();
  Message = "";
  constructor( private _subscribersService:SubscribersService ) { }

  ngOnInit() {
  }

  Subscriptor:Subscriptor = {
    Email: ""
  };

  save(){
    if(this.Subscriptor.Email == ""){
     this.Message = "Email required"
    }else{
      console.log(this.Subscriptor)
      this._subscribersService.newSubscriber( this.Subscriptor )
        .subscribe( data =>{
          alert('Thanks ' + this.Subscriptor.Email + ' for your interest on our services :).');
          this.Subscriptor.Email = "";
          this.Message = "";
        },
      error=> console.error(error));
      console.log(this.Subscriptor.Email);
    }
  }
}
