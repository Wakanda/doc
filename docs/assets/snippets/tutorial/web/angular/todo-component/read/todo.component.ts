import { Component, OnInit } from '@angular/core';
import { Wakanda } from '../wakanda.service';


@Component({
  selector: 'app-todo',
  providers: [Wakanda],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
    todos = [];
  
    constructor(public wakanda: Wakanda) { 
        
    }
	
    ngOnInit() {}

    getTodos() {
	    this.wakanda.getCatalog().then(ds => {
	        ds['Todo'].query().then(collection => {
	        	this.todos = collection.entities;
	        });
	    });
    }

}
