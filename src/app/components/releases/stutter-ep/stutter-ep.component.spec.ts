import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StutterEpComponent } from './stutter-ep.component';

describe('StutterEpComponent', () => {
  let component: StutterEpComponent;
  let fixture: ComponentFixture<StutterEpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StutterEpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StutterEpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
