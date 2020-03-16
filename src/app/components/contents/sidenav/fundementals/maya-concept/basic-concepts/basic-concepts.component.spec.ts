import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicConceptsComponent } from './basic-concepts.component';

describe('BasicConceptsComponent', () => {
  let component: BasicConceptsComponent;
  let fixture: ComponentFixture<BasicConceptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicConceptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
