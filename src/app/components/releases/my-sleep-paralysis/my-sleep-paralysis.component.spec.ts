import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySleepParalysisComponent } from './my-sleep-paralysis.component';

describe('MySleepParalysisComponent', () => {
  let component: MySleepParalysisComponent;
  let fixture: ComponentFixture<MySleepParalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySleepParalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySleepParalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
