import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Wakanda } from '../../app/wakanda.service';
import { HomePage } from '../home/home';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Wakanda]
})
export class LoginPage {
  name : string;
  password : string;
  constructor(public navCtrl: NavController, 
			  public navParams: NavParams,
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
