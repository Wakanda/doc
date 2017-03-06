import { Component, OnInit } from '@angular/core';
import { TutorialElement } from '../tutorial-element';
import { ELEMENTS } from '../mock-tutorial-data';

@Component({
  selector: 'app-tutorial-detail-customized',
  templateUrl: './tutorial-detail-customized.component.html',
  styleUrls: ['./tutorial-detail-customized.component.css']
})
export class TutorialDetailCustomizedComponent implements OnInit {

  tutorial : TutorialElement;
    
  elements = ELEMENTS;
    
  datastores =this.elements.datastores;    
  
  fronts  = this.elements.frontTechnology;    
 
  mobs  = this.elements.mobileTechnology;    
  
  sessions  = this.elements.session; 
  
  submitted = false;
  
  constructor() { }

  ngOnInit() {  
     
      this.tutorial = {
          type : [],
          datastores : [],
          frontTechnology : this.fronts[1].value,
          mobileTechnology : this.mobs[1].value,
          session : this.sessions[0].value,
      }
      
  }
  
   onSubmit(tutoForm:TutorialElement){
       console.log(tutoForm);
       this.submitted = true;
   }
}
