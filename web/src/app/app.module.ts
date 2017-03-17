import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { Ng2SelectModule  } from 'ng2-material-select';
import { AppComponent } from './app.component';
import { GuideComponent } from './guide/guide.component';
import { ReferenceComponent } from './reference/reference.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { TutorialDetailMonolithicComponent } from './tutorial-detail-monolithic/tutorial-detail-monolithic.component';
import { TutorialDetailCustomizedComponent } from './tutorial-detail-customized/tutorial-detail-customized.component';
import { KeysPipe } from './keys.pipe';
import { TutorialContentComponent } from './tutorial-content/tutorial-content.component';
import { GuideContentComponent } from './guide-content/guide-content.component';
@NgModule({
  declarations: [
    AppComponent,
    GuideComponent,
    ReferenceComponent,
    TutorialComponent,
    TutorialDetailMonolithicComponent, TutorialDetailCustomizedComponent, KeysPipe, TutorialContentComponent, GuideContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2SelectModule ,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      {path: 'guide',component: GuideComponent},
      {path: 'api-reference',component: ReferenceComponent},
      {path: 'tutorial',component: TutorialComponent},
      {path: '',redirectTo: '/tutorial',pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }