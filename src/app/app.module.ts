import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {HttpModule} from '@angular/http';

import { SubscribersService } from './services/subscribers.service';

import { AppComponent } from './app.component';
import { SoonComponent } from './components/soon/soon.component';


@NgModule({
  declarations: [
    AppComponent,
    SoonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    SubscribersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
