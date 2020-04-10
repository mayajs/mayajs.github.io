import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mission",
  templateUrl: "./mission.component.html",
  styleUrls: ["./mission.component.scss"],
})
export class MissionComponent implements OnInit {
  svg = "../../../../assets/svg/mission.svg";
  constructor() {}

  ngOnInit(): void {}
}
