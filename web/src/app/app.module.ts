import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { GuideComponent } from './guide/guide.component';
import { ReferenceComponent } from './reference/reference.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { TutorialDetailComponent } from './tutorial-detail/tutorial-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GuideComponent,
    ReferenceComponent,
    TutorialComponent,
    TutorialDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
