import { Component, OnInit } from '@angular/core';
import { TutorialElement } from '../tutorial-element';
import { ELEMENTS } from '../mock-tutorial-data';

@Component({
  selector: 'app-tutorial-detail-customized',
  templateUrl: './tutorial-detail-customized.component.html',
  styleUrls: ['./tutorial-detail-customized.component.css']
})
export class TutorialDetailCustomizedComponent implements OnInit {

  content :string;
  
  tutorial : TutorialElement;
    
  elements = ELEMENTS;
    
  datastores =this.elements.datastores;    
  
  fronts  = this.elements.frontTechnology;    
 
  mobs  = this.elements.mobileTechnology;    
  
  sessions  = this.elements.session; 
  
  submitted = false;
  
  types = this.elements.type;
  
  constructor() { }

  ngOnInit() {  
     
     this.initForm();
      
  }
  
   initForm() {
   	  
   	  this.tutorial = {
          type :  this.types[1],
          datastores : [],
          frontTechnology : this.fronts[1].value,
          mobileTechnology : this.mobs[1].value,
          session : this.sessions[0].value,
      }
   }
   
   onSubmit(tutoForm:TutorialElement){
   		
   		this.submitted = true;
   }
   
   
   back(){
   		this.initForm();
        this.submitted = false;
        this.content="";
   }
   
   
   getContent(tuto){
       this.content = tuto;
   }
}
