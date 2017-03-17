import { Component, OnInit } from '@angular/core';
import { ELEMENTS } from '../mock-tutorial-data';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']})

export class TutorialComponent {

   elements = ELEMENTS;    
   
   types = this.elements.type;
} 
 