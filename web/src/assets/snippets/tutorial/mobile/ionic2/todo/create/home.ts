import { Component } from '@angular/core';
import { Wakanda } from '../../app/wakanda.service';
import { NavController } from 'ionic-angular';
import { AddTodoPage } from '../add-todo/add-todo';
import { ModalController } from 'ionic-angular';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [Wakanda]
})
export class HomePage {
    todos: any[];
    constructor(public navCtrl: NavController,
        public wakanda: Wakanda,
        public modalCtrl: ModalController) {

        this.todos = [];
    }

    ionViewDidLoad() {
        this.getTodos();
    }

    getTodos() {
        this.wakanda.catalog.then(ds => {
            ds['Todo'].query().then(collection => {
                this.todos = collection.entities;
            });
        });
    }

    addTodo() {
        let addModal = this.modalCtrl.create(AddTodoPage);
        addModal.onDidDismiss((todo) => {
            if (todo) {
                this.saveTodo(todo);
            }
        });
        addModal.present();
    }

    saveTodo(todo) {
        this.todos.push(todo);
    }

}