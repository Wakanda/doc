// make all parts as one DYNAMIC_DIRECTIVES 
import { forwardRef }   from '@angular/core';
import { MdCardModule, MdTabsModule} from '@angular/material';
import { SnippetsComponent } from '../snippets/snippets.component';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

export const DYNAMIC_DIRECTIVES = [
  forwardRef(() => SnippetsComponent)
];

// module itself
import { NgModule }      from '@angular/core';
import { CommonModule }  from "@angular/common";
import { FormsModule }   from "@angular/forms";

@NgModule({
  imports:      [ 
      CommonModule,
      FormsModule,
      MarkdownToHtmlModule,
      MdTabsModule
  ],
  declarations: [
      DYNAMIC_DIRECTIVES
  ],
  exports: [
      DYNAMIC_DIRECTIVES,
      CommonModule,
      FormsModule,
      MdCardModule
  ]
})
export class PartsModule {

    static forRoot()
    {
        return {
            ngModule: PartsModule,
            providers: [], // not used here, but if singleton needed
        };
    }
}