import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-tutorial-content',
  templateUrl: './tutorial-content.component.html',
  styleUrls: ['./tutorial-content.component.css']
})
export class TutorialContentComponent implements OnInit {
    
  @Input()
  content;
  
  constructor() { }

  ngOnInit() {
  }

}
