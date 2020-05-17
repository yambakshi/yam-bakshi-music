import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StutterEpPreSaveComponent } from './stutter-ep-pre-save.component';

describe('StutterEpPreSaveComponent', () => {
  let component: StutterEpPreSaveComponent;
  let fixture: ComponentFixture<StutterEpPreSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StutterEpPreSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StutterEpPreSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
