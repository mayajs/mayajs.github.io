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
    "Declarative way of defining routes.",
    "Adding route files has gotten easy using our CLI.",
    "Business logic can be shared using services.",
    "Create method routes using method declaration.",
    "Not heavily relies on typescript declarations like what others framework does.",
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
