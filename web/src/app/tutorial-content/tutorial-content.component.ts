import { Component, OnInit, Input, Compiler, ViewContainerRef, NgModule } from '@angular/core';
import { PartsModule } from '../parts/parts.module';
@Component({
  selector: 'app-tutorial-content',
  templateUrl: './tutorial-content.component.html',
  styleUrls: ['./tutorial-content.component.css']
})
export class TutorialContentComponent implements OnInit {
    
  @Input()
  content;
  
 
  constructor(
  	private compiler: Compiler,
  	private container: ViewContainerRef
  ) { }

 ngOnChanges() {
  	if(!this.content){
  		return;
  	}
  
  	this.content = `
  	<md-card style='box-shadow:none;padding-bottom:200px'>
		<md-card-content>
			${this.content}
		</md-card-content>
	</md-card>`;
  	
  	let type   = this.createNewComponent(this.content);
    let module = this.createComponentModule(type);
    
  	const compiled = this.compiler.compileModuleAndAllComponentsSync(module);
  	
  	const factory = compiled.componentFactories.filter(factory=>{
  		return factory.selector === 'dynamic-component';
  	})[0];
    this.container.clear();    
    this.container.createComponent(factory);
  }
ngOnInit() {}
  createNewComponent(tmpl:string){
  	@Component({
      selector: 'dynamic-component',
      template: tmpl,
    })
    class CustomDynamicComponent {
      @Input()  public entity: any;
    };
    // a component for this particular template
    return CustomDynamicComponent;
  }
  
  createComponentModule(componentType: any){
  	@NgModule({
        imports: [
        	PartsModule
        ],
        declarations: [
          componentType
        ],
      })
      class RuntimeComponentModule
      {
      }
    // a module for just this Type
    return RuntimeComponentModule;
  }

}
