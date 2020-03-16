import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesContentComponent } from './modules-content.component';

describe('ModulesContentComponent', () => {
  let component: ModulesContentComponent;
  let fixture: ComponentFixture<ModulesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
