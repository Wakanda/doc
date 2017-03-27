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
  private _files : Array<string>;
  private contents : any = {};
  
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
  }
  
  handleChange(id){
  	this.currentFilePath = this.path + this._files[id];
  }
  
  getFilePath(filePath){
  	let path = this.path + filePath;
  	
  	return path;
  }
}
