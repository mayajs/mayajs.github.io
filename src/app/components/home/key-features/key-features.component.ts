import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-key-features",
  templateUrl: "./key-features.component.html",
  styleUrls: ["./key-features.component.scss"],
})
export class KeyFeaturesComponent implements OnInit {
  svg = {
    ts: "../../../../assets/svg/typescript.svg",
    express: "../../../../assets/svg/routing.svg",
    code: "../../../../assets/svg/code.svg",
    setting: "../../../../assets/svg/settings.svg",
    check: "../../../../assets/svg/check.svg",
  };

  constructor() {}

  ngOnInit(): void {}
}
