import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTemplateComponent } from './gallery-template.component';

describe('GalleryTemplateComponent', () => {
  let component: GalleryTemplateComponent;
  let fixture: ComponentFixture<GalleryTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
