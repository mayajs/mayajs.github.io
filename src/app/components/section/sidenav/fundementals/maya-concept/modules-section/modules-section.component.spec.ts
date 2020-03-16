import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesSectionComponent } from './modules-section.component';

describe('ModulesSectionComponent', () => {
  let component: ModulesSectionComponent;
  let fixture: ComponentFixture<ModulesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
