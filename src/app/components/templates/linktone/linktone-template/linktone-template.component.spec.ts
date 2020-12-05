import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinktoneTemplateComponent } from './linktone-template.component';

describe('LinktoneTemplateComponent', () => {
  let component: LinktoneTemplateComponent;
  let fixture: ComponentFixture<LinktoneTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinktoneTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinktoneTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
