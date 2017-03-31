import { Component, OnInit } from '@angular/core';
import { TutorialElement } from '../tutorial-element';
import { ELEMENTS } from '../mock-tutorial-data';
@Component({
	selector: 'app-tutorial-detail-customized',
	templateUrl: './tutorial-detail-customized.component.html',
	styleUrls: ['./tutorial-detail-customized.component.css']
})
export class TutorialDetailCustomizedComponent implements OnInit {

	content :string;  
	tutorial : TutorialElement;   
	tuto : string;
	elements   = ELEMENTS;    
	datastores = this.elements.datastores;  
	fronts     = this.elements.frontTechnology; 
	mobs       = this.elements.mobileTechnology;  
	sessions   = this.elements.session;  
	submitted  = false;  
	types      = this.elements.type;
  
	constructor() { }

	ngOnInit() {     
		this.initForm();      
	}
  
	initForm() {

		this.tutorial = {
			type: this.types[1],
			datastores: [],
			frontTechnology: this.fronts[1].value,
			mobileTechnology: this.mobs[1].value,
			session: this.sessions[0].value,
		}
	}

	onSubmit(tutoForm: TutorialElement) {
		this.submitted = true;
		this.getHtmlFile("intro.html");
	}

	back() {

		this.initForm();
		this.submitted = false;
		this.content = "";
	}

	
	getHtmlFile(path) {
		let xhr = new XMLHttpRequest();

		xhr.open('GET', `./assets/sections/tutorial/${path}`);
		xhr.send();

		xhr.onload = () => {
			this.content = xhr.responseText;
		};
	}

	getContent(tuto) {

		let path;
		this.tuto = tuto;

		for (let key in this.elements) {
			let arr = this.elements[key];
			for (let i = 0; i < arr.length; i++) {
				let obj = arr[i];
				for (let prop in obj) {
					if (obj.hasOwnProperty(prop)) {
						if (obj[prop] === tuto.value) {
							path = obj.path;
						}

					}
				}
			}
		}
		if(path){
			//console.log(path);
			this.getHtmlFile(path);
		}
			
		

	}
}
