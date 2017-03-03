import { Component,Input,OnInit} from '@angular/core';
import { TutorialElement } from '../tutorial-element';

@Component({
  selector: 'app-tutorial-detail',

  templateUrl: './tutorial-detail.component.html',
  styleUrls: ['./tutorial-detail.component.css']
})
export class TutorialDetailComponent implements OnInit {

    @Input()
   type:string;
 
    tutorial : TutorialElement;
   
    datastores = [
    { value: 'Wakanda Local', checked: false },
    { value: 'Wakanda Remote', checked: false },
    { value: '4D', checked: false },
    { value: 'MYSQL', checked: false },
    { value: 'MSSQL', checked: false },
    { value: 'ODBC', checked: false },
  ];    
  
  fronts  = [
    { value: 'Angular 1', checked: false },
    { value: 'Angular 2', checked: true }
  ];    
  mobs  =  [
    { value: 'Ionic 1', checked: false },
    { value: 'Ionic 2', checked: true }
  ];    
  sessions  = [
  	{ value: 'Local', checked: true },
  	{ value: 'JWT', checked: false },
    { value: 'Redis', checked: false },
    { value: 'Custom', checked: false }
  ];    
  
  
  ngOnInit() {
      this.tutorial = {
          type : "",
          datastores : [],
          frontTechnology : this.fronts[1].value,
          mobileTechnology : this.mobs[1].value,
          session : this.sessions[0].value,
      }
  }
  

	
   onSubmit(tutoForm:TutorialElement){
       console.log(tutoForm)
   }
   
   updatemodel(ds){
   	//console.log(ds.checked)
   	this.datastores.forEach(function(item) { if (item.value == ds.value) item.checked = ds.checked; });
   	console.log(this.datastores)
   	console.log(this.tutorial.datastores)
   }


}
