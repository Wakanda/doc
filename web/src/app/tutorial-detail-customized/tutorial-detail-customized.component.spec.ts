import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialDetailCustomizedComponent } from './tutorial-detail-customized.component';

describe('TutorialDetailCustomizedComponent', () => {
  let component: TutorialDetailCustomizedComponent;
  let fixture: ComponentFixture<TutorialDetailCustomizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialDetailCustomizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialDetailCustomizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
