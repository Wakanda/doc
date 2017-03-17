import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

 content : string;
 
  constructor() {}

  ngOnInit() {}

  
  getContent(content){
  	this.content = content;
  }
}
