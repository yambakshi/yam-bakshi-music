import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShyComponent } from './shy.component';

describe('ShyComponent', () => {
  let component: ShyComponent;
  let fixture: ComponentFixture<ShyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
