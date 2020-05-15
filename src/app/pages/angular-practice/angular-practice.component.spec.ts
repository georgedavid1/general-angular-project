import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPracticeComponent } from './angular-practice.component';

describe('AngularPracticeComponent', () => {
  let component: AngularPracticeComponent;
  let fixture: ComponentFixture<AngularPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
