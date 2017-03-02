import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent {

  selectedTuto : string;    
  types  = ['Monolithic','Cutomized'];
  choice = false;
	
	onSelect(tutoType) {
    this.selectedTuto = tutoType;
     this.choice = true;
  	}
}
