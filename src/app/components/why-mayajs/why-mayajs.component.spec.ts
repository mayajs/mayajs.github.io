import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WhyMayajsComponent } from "./why-mayajs.component";

describe("WhyMayajsComponent", () => {
  let component: WhyMayajsComponent;
  let fixture: ComponentFixture<WhyMayajsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WhyMayajsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyMayajsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
