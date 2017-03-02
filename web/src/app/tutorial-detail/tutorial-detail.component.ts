import { Component,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-tutorial-detail',
  templateUrl: './tutorial-detail.component.html',
  styleUrls: ['./tutorial-detail.component.css']
})
export class TutorialDetailComponent implements OnInit {

    @Input()
   type:string;
 
  datastores  = ['4D','Local','Oracle','MSSQL','MYSQL'];
  fronts  = ['Angular 1','Angular 2'];
  mobs  = ['Ionic 1','Ionic 2'];
  
  elements = new Array();

  ngOnInit() {}
  
   onCahnge(element){
      
      if(this.elements.indexOf(element) > -1){
           this.elements.splice(this.elements.indexOf(element), 1);
      }else{
           this.elements.push(element)
      }
     
      
    
  }
  
  sendArray(){
  	this.elements.push(this.type)
    console.log(JSON.stringify(this.elements)) 
  }
}
