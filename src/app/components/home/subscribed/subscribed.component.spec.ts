import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SubscribedComponent } from "./subscribed.component";

describe("SubscribedComponent", () => {
  let component: SubscribedComponent;
  let fixture: ComponentFixture<SubscribedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
