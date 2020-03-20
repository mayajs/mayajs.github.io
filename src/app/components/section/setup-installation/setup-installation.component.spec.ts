import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupInstallationComponent } from './setup-installation.component';

describe('SetupInstallationComponent', () => {
  let component: SetupInstallationComponent;
  let fixture: ComponentFixture<SetupInstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupInstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
