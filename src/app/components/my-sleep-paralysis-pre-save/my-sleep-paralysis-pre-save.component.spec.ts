import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySleepParalysisPreSaveComponent } from './my-sleep-paralysis-pre-save.component';

describe('MySleepParalysisPreSaveComponent', () => {
  let component: MySleepParalysisPreSaveComponent;
  let fixture: ComponentFixture<MySleepParalysisPreSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySleepParalysisPreSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySleepParalysisPreSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
