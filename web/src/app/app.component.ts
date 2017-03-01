import { Component } from '@angular/core';

import { Wakanda } from './wakanda.service';

@Component({
  selector: 'app-root',
  providers: [Wakanda],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
	 tabLinks = [
    {label: 'Guide', link: '/guide'},
    {label: 'API Reference', link: '/api-reference'},
    {label: 'Tutorial', link: '/tutorial'},
  ];
  
  activeLinkIndex = 0;
  constructor() {
    
  }
}
