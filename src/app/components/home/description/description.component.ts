import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-description",
  templateUrl: "./description.component.html",
  styleUrls: ["./description.component.scss"],
})
export class DescriptionComponent implements OnInit {
  svg = {
    maya: "../../../../assets/svg/logo-maya.svg",
    branch: "../../../../assets/svg/branches.svg",
    github: "../../../../assets/svg/github.svg",
  };
  constructor() {}

  ngOnInit(): void {}
}
