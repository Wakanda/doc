import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialDetailMonolithicComponent } from './tutorial-detail-monolithic.component';

describe('TutorialDetailMonolithicComponent', () => {
  let component: TutorialDetailMonolithicComponent;
  let fixture: ComponentFixture<TutorialDetailMonolithicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialDetailMonolithicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialDetailMonolithicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
