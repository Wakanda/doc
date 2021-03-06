import { Component, OnInit } from '@angular/core';
import GuideData from './guide.data';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
	
	menuSection : any;
	
	backTitle : string;
	
	menu : any;
	
	sections : any;
	
	content : string;
 
	constructor(private activatedRoute: ActivatedRoute, private router: Router) {
	    this.menu = GuideData.tree;
	}

	ngOnInit() {		
		this.activatedRoute.queryParams.subscribe((params: Params) => {
			console.log(params);
	        let section = params['section'] || "main";
	        
        	this.displaySectionByID(section);
	    });
		
	}
	
	displaySectionByID(id){
		let info = this.getSectionInfoByID(id);
		this.router.navigate([], {
	        queryParams: {section : id},
	        relativeTo: this.activatedRoute
	    });
		this.displaySection(info.section, info.backSection, info.menuSection);
	}
  
	displaySection(section, backSection, menuSection){
		
		this.currentSection = section.id;
        this.atRoot         = (menuSection.root) ? true :  section.root;
		
		this.sections = menuSection.sections;
		this.title    = menuSection.title;
		this.menuSection = menuSection;
		
		this.backSection = backSection;
		
		this.displayPage(section.path);		
	}
	
	displayPage(path){
		let xhr = new XMLHttpRequest();
		xhr.open('GET', `./assets/sections/${path}`);
		xhr.send();
		
		xhr.onload = ()=>{
			this.content = xhr.responseText;
		};
	}
	
	goBack(){
		this.displaySectionByID(this.backSection.id);
	}
	
	/**
	 * TODO : make this code more optimized
	 **/
	getSectionInfoByID(id){
		let backID;
		let menuID;
		let index = id.lastIndexOf('-');
		if(index !== -1){
			backID = id.substr(0, index);
		} else {
			return {
				section : this.menu,
				backSection : null,
				menuSection : this.menu
			}
		}
		
		let section     = this.getSectionByID(id);
		let backSection;
		
		if(section.sections){
			backSection = this.getSectionByID(backID);
			
			return  {
				section,
				backSection,
				menuSection : section
			};
		} 
		
		index  = backID.lastIndexOf('-');
		
		if(index !== -1){
			menuID = backID;
			backID = id.substr(0, index);
			backSection = this.getSectionByID(backID);
			let menuSection = this.getSectionByID(menuID, backSection.sections);
			
			return {
				section,
				backSection,
				menuSection : menuSection
			};
		} else {
			return {
				section,
				backSection : this.menu,
				menuSection : this.menu
			}
		}
	}
	
	getSectionByID(id, inSections?){
		let section      = null;
		let sections     = inSections || this.menu.sections;
		
		if(id === "main"){
			return this.menu;
		}
		
		sections.some(_section=>{
			if(id.indexOf(_section.id) > -1 ){
				section = _section;
				return true;
			}
			return false;
		});
		
		if(section.id === id){
			return section
		} else {
			return this.getSectionByID(id, section.sections);			
		}
	}
}
