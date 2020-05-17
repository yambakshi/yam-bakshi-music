import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StutterComponent } from './stutter.component';

describe('StutterComponent', () => {
  let component: StutterComponent;
  let fixture: ComponentFixture<StutterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StutterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
