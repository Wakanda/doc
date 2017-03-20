import { Component, OnInit } from '@angular/core';
import GuideData from './guide.data';

@Component({
	selector: 'app-guide', 
	templateUrl: './guide.component.html',
	styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
	
	currentSection : string;
	
	atRoot: boolean;
	
	title : string;
	
	backSection : any;
	
	backTitle : string;
	
	menu : any;
	
	sections : any;
	
	content : string;
 
	constructor() {}

	ngOnInit() {
		this.menu = GuideData.tree;
		
		this.displaySection(this.menu);
	}
  
	displaySection(section){
		
		if(!section){
			section = this.menu
		}
		
		
		this.currentSection = section.id;
		
		if(section.sections){
			this.atRoot   = section.root;
			this.sections = section.sections;
			this.title    = section.title;
		}
		
		this.setBackSection(section);
		
		this.displayPage(section.path);		
	}
	
	displayPage(path){
		let xhr = new XMLHttpRequest();
		xhr.open('GET', `../assets/sections/${path}`);
		xhr.send();
		
		xhr.onload = ()=>{
			this.content = xhr.responseText;
		};
	}
	
	goBack(){
		this.displaySection(this.backSection);
	}
	
	setBackSection(section){
		let IDs = section.id.split('-');
		let backSection = null;
		let sections = this.menu;
		
		if(IDs.length = 1){
			this.backSection = this.menu;
			return;
		}
		
		for(let i = 0; i<IDs.length-1; i++){
			backSection = this.getSubSectionByID(sections, IDs.slice(0,i+1).join('-'));
		}
		
		this.backSection = backSection;
	}
	
	getSubSectionByID(sections, id){
		let section = null;
		
		sections.some(_section=>{
			if(_section.id === id){
				section = _section;
				return true;
			}
			return false;
		});
		
		return section;
	}
}
