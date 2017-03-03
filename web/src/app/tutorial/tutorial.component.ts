import { Component, OnInit } from '@angular/core';
import { TutorialType } from '../tutorial-type';


@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})

export class TutorialComponent {

  selectedTuto : string;    
 
  types : TutorialType[] = [
      {label :'Monolithic' , description: 'A tutorial is generated automatically for you.It includes Wakanda Local as default datastore, Ionic 2 as default mobile technology, Angular 2 as default Web technology, and Local as default session handler.'},
      {label :'Cutomized' , description: 'Allows you to cutomize the elements for your tutorial.'}
      ]
 	
	onSelect(tutoType) {
    	this.selectedTuto = tutoType;
    }
}
