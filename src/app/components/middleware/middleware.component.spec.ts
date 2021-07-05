import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlewareComponent } from './middleware.component';

describe('MiddlewareComponent', () => {
  let component: MiddlewareComponent;
  let fixture: ComponentFixture<MiddlewareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddlewareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddlewareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
