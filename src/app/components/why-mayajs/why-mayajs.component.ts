import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-why-mayajs",
  templateUrl: "./why-mayajs.component.html",
  styleUrls: ["./why-mayajs.component.scss"],
})
export class WhyMayajsComponent implements OnInit {
  easyList = [
    "Beginner-friendly and accessible for any skill level.",
    "Assists in making complex routes through built-in CLI.",
  ];

  simpleList = [
    "Gives declarative ways of defining routes.",
    "Simplifies adding route files through our CLI.",
    "Enables sharing business logic using services.",
    "Creates routes using method declaration.",
    "Near-independent from typescript declarations unlike most frameworks.",
  ];

  tsList = [
    "Declarations for defining methods, controllers and services.",
    "Dependency injection and meta-programming.",
    "Safer codes for development and production.",
    "Uses latest and upcomming javascript features.",
    "Type checking while coding not on runtime.",
    "Less runtime errors.",
  ];

  constructor() {}

  ngOnInit(): void {}
}
