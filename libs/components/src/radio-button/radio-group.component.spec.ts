import { Component } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { RadioButtonComponent } from "./radio-button.component";
import { RadioButtonModule } from "./radio-button.module";

describe("RadioGroupComponent", () => {
  let fixture: ComponentFixture<TestApp>;
  let testAppComponent: TestApp;
  let buttonElements: RadioButtonComponent[];
  let radioButtons: HTMLInputElement[];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RadioButtonModule],
      declarations: [TestApp],
    });

    TestBed.compileComponents();
    fixture = TestBed.createComponent(TestApp);
    testAppComponent = fixture.debugElement.componentInstance;
    buttonElements = fixture.debugElement
      .queryAll(By.css("bit-radio-button"))
      .map((e) => e.componentInstance);
    radioButtons = fixture.debugElement
      .queryAll(By.css("input[type=radio]"))
      .map((e) => e.nativeElement);

    fixture.detectChanges();
  }));

  it("should select second element when setting selected to second", async () => {
    testAppComponent.selected = "second";
    fixture.detectChanges();
    await fixture.whenStable();

    expect(buttonElements[1].selected).toBe(true);
  });

  it("should not select second element when setting selected to third", async () => {
    testAppComponent.selected = "third";
    fixture.detectChanges();
    await fixture.whenStable();

    expect(buttonElements[1].selected).toBe(false);
  });

  it("should emit new value when changing selection by clicking on radio button", async () => {
    testAppComponent.selected = "first";
    fixture.detectChanges();
    await fixture.whenStable();

    radioButtons[1].click();

    expect(testAppComponent.selected).toBe("second");
  });
});

@Component({
  selector: "test-app",
  template: `
    <bit-radio-group [(ngModel)]="selected">
      <bit-radio-button value="first">First</bit-radio-button>
      <bit-radio-button value="second">Second</bit-radio-button>
      <bit-radio-button value="third">Third</bit-radio-button>
    </bit-radio-group>
  `,
})
class TestApp {
  selected?: string;
}