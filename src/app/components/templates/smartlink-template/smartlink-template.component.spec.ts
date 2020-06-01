import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartlinkTemplateComponent } from './smartlink-template.component';

describe('SmartlinkTemplateComponent', () => {
  let component: SmartlinkTemplateComponent;
  let fixture: ComponentFixture<SmartlinkTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartlinkTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartlinkTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
