import { Component, OnInit } from '@angular/core';
import { TutorialElement } from '../tutorial-element';
import { ELEMENTS } from '../mock-tutorial-data';

@Component({
    selector: 'app-tutorial-detail-monolithic',
    templateUrl: './tutorial-detail-monolithic.component.html',
    styleUrls: ['./tutorial-detail-monolithic.component.css']
})
export class TutorialDetailMonolithicComponent implements OnInit {

    content: string;

    tuto: string;

    tutorial: TutorialElement;

    elements = ELEMENTS

    datastore = this.elements.datastores;

    fronts = this.elements.frontTechnology;

    mobs = this.elements.mobileTechnology;

    sessions = this.elements.session;

    submitted = false;

    types = this.elements.type;

    constructor() { }


    ngOnInit() {

        this.tutorial = {
            type: this.types[0],
            datastores: this.datastore[0],
            frontTechnology: this.fronts[1],
            mobileTechnology: this.mobs[1],
            session: this.sessions[0],
        }

    }



    onSubmit(tutoForm: TutorialElement) {
        this.submitted = true;
        this.getHtmlFile("intro.html");

    }
    

    back() {
      
        this.submitted = false;
        this.content = "";
        this.tuto = "";
    }

    getContent(tuto) {

        this.tuto = tuto.value;
        this.getHtmlFile(tuto.path)
    }

    getHtmlFile(path) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', `./assets/sections/tutorial/${path}`);
        xhr.send();

        xhr.onload = () => {
            this.content = xhr.responseText;
        };
    }

}
