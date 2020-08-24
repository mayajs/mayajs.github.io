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

  simpleList = [
    "Declarative way of defining routes.",
    "Adding route files has gotten easy using our CLI.",
    "Business logic can be shared using services.",
    "Less runtime error with type checking using Typescript.",
    "Create method routes using method declaration.",
  ];
  constructor() {}

  ngOnInit(): void {}
}
