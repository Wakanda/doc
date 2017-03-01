import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent {

  selectedTuto : string;    
  types  = ['monolithic','cutomized'];
	
	onSelect(tutoType) {
    this.selectedTuto = tutoType;
	}
}
