import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartlinkFooterComponent } from './smartlink-footer.component';

describe('SmartlinkFooterComponent', () => {
  let component: SmartlinkFooterComponent;
  let fixture: ComponentFixture<SmartlinkFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartlinkFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartlinkFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
