import { Component, OnInit } from '@angular/core';
import { Wakanda } from '../wakanda.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-todo',
  providers: [Wakanda],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  todos ;
  newTodoText :string = "";
  
  constructor(public wakanda: Wakanda,public router:Router) { 
  	this.todos = []
  }

	
  ngOnInit() {}

  getTodos() {
	    this.wakanda.catalog.then(ds => {
	        ds['Todo'].query().then(collection => {
	        	this.todos = collection.entities;
	        });
	    });
	}


}
