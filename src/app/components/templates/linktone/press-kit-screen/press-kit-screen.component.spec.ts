import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressKitScreenComponent } from './press-kit-screen.component';

describe('PressKitScreenComponent', () => {
  let component: PressKitScreenComponent;
  let fixture: ComponentFixture<PressKitScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressKitScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressKitScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
