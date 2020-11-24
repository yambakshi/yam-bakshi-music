import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsScreenComponent } from './credits-screen.component';

describe('CreditsScreenComponent', () => {
  let component: CreditsScreenComponent;
  let fixture: ComponentFixture<CreditsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
