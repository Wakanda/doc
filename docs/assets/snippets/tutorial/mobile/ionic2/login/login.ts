import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Wakanda } from '../../app/wakanda.service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Wakanda]
})
export class LoginPage {
  name : string;
  password : string;
  constructor(public navCtrl: NavController,
              public wakanda: Wakanda) {}

 login() {
     this.wakanda.directory.login(this.name, this.password).then(() => {
         this.wakanda.directory.currentUserBelongsTo('todoUsers').then(result => {
             result ? this.navCtrl.setRoot(HomePage) : alert('You are not authorized to proceed !')
         })
     }).catch((e) => {
		alert('Wrong user name or password !')
     })

 }
}
