import { Component, OnInit } from '@angular/core';
import { TutorialElement } from '../tutorial-element';
import { ELEMENTS } from '../mock-tutorial-data';

@Component({
  selector: 'app-tutorial-detail-monolithic',
  templateUrl: './tutorial-detail-monolithic.component.html',
  styleUrls: ['./tutorial-detail-monolithic.component.css']
})
export class TutorialDetailMonolithicComponent implements OnInit {

    content :string ;

    tutorial : TutorialElement;
    
    elements = ELEMENTS
    
    datastores =this.elements.datastores;    
  
    fronts  = this.elements.frontTechnology;    
 
    mobs  = this.elements.mobileTechnology;    
  
    sessions  = this.elements.session; 
  
    submitted = false;
    
    types = this.elements.type;
    
  constructor() { }

  ngOnInit() { 
     
      this.tutorial = {
          type : this.types[0],
          datastores : [this.datastores[0]],
          frontTechnology : this.fronts[1].value,
          mobileTechnology : this.mobs[1].value,
          session : this.sessions[0].value,
      }
      
  }
   onSubmit(tutoForm:TutorialElement){
       /*console.log(tutoForm);*/
       this.submitted = true;
       
   }
   
   back(){
        this.submitted = false;
        this.content=""
   }
   
   getContent(tuto){
       this.content = tuto;
     
   }

}
