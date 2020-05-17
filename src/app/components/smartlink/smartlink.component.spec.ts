import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartlinkComponent } from './smartlink.component';

describe('SmartlinkComponent', () => {
  let component: SmartlinkComponent;
  let fixture: ComponentFixture<SmartlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
