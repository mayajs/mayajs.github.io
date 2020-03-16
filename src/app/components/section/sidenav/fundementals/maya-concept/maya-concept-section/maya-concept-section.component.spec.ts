import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayaConceptSectionComponent } from './maya-concept-section.component';

describe('MayaConceptSectionComponent', () => {
  let component: MayaConceptSectionComponent;
  let fixture: ComponentFixture<MayaConceptSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayaConceptSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayaConceptSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
