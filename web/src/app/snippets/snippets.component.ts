import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.css']
})
export class SnippetsComponent implements OnInit {
  @Input()
  files;
  @Input()
  path;
  
  private currentFilePath : string;
  private currentFileCode : string;
  private _files : Array<string>;
  
  constructor() { }

  ngOnInit() {
  	try{
  		this._files = eval(this.files); //bad, really bad
  	}catch(e){
  		
  	}
  	if(!this._files.length){
  		return;
  	}
  	
  	this.currentFilePath = this.path + this._files[0];
  	
  	this.loadFile();
  }
  
  loadFile(){
  	let xhr = new XMLHttpRequest();
  	
  	xhr.open('GET', this.currentFilePath);
  	
  	xhr.send();
  	
  	xhr.onload = ()=>{
  		this.currentFileCode = xhr.responseText;
  	}
  }
}
