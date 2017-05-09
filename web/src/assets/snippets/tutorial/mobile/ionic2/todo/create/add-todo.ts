import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { Wakanda } from '../../app/wakanda.service';

/*
  Generated class for the AddTodo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-add-todo',
    templateUrl: 'add-todo.html',
    providers: [Wakanda]
})
export class AddTodoPage {
	
    newTodoText: string = "";
    
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public wakanda: Wakanda,
        public view: ViewController) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddTodoPage');
    }

    saveTodo() {
        this.wakanda.catalog.then(ds => {
            let todo = ds['Todo'].create({
                label: this.newTodoText,
                completed: false
            });
            todo.save().then(() => {
                this.view.dismiss(todo)
            })
        });

    }

    close() {
        this.view.dismiss();
    }

}