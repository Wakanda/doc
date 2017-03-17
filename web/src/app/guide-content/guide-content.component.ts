import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-guide-content',
  templateUrl: './guide-content.component.html',
  styleUrls: ['./guide-content.component.css']
})
export class GuideContentComponent implements OnInit {
  @Input()
  content;
  
  constructor() { }

  ngOnInit() {
  }

}
