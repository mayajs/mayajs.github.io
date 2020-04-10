import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-vision",
  templateUrl: "./vision.component.html",
  styleUrls: ["./vision.component.scss"],
})
export class VisionComponent implements OnInit {
  svg = "../../../../assets/svg/vision.svg";
  constructor() {}

  ngOnInit(): void {}
}
