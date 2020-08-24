import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-why-mayajs",
  templateUrl: "./why-mayajs.component.html",
  styleUrls: ["./why-mayajs.component.scss"],
})
export class WhyMayajsComponent implements OnInit {
  easyList = [
    "Easy to understand even for beginners.",
    "Can be used by developers with any skill levels.",
    "Help in making complex routes by using built-in cli.",
  ];
  constructor() {}

  ngOnInit(): void {}
}
