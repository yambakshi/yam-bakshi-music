import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparentVideoClipComponent } from './transparent-video.component';

describe('TransparentVideoClipComponent', () => {
  let component: TransparentVideoClipComponent;
  let fixture: ComponentFixture<TransparentVideoClipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransparentVideoClipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransparentVideoClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
