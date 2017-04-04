import { Component } from '@angular/core';
import { Wakanda } from '../../app/wakanda.service';
import { NavController, ModalController } from 'ionic-angular';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [Wakanda]
})
export class HomePage {
    todos: any[];
    constructor(public wakanda: Wakanda) {
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

}