import { Component, OnInit } from '@angular/core';
import { GuideComponent } from '../guide/guide.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import TutoData from './tutorial.data';

@Component({
	selector: 'app-guide', 
	templateUrl: './tutorial.component.html',
	styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent extends GuideComponent {
    constructor(activatedRoute: ActivatedRoute, router: Router){
        super(activatedRoute, router);
        this.menu = TutoData.tree;
    }   
} 
 