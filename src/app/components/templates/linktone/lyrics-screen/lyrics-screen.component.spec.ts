import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsScreenComponent } from './lyrics-screen.component';

describe('LyricsScreenComponent', () => {
  let component: LyricsScreenComponent;
  let fixture: ComponentFixture<LyricsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyricsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
