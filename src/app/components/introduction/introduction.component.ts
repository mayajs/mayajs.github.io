import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-introduction",
  templateUrl: "./introduction.component.html",
  styleUrls: ["./introduction.component.scss"],
})
export class IntroductionComponent implements OnInit {
  import = `import { MayaJS } from "@mayajs/core";`;
  packages = [
    {
      name: "@mayajs/core",
      url: "https://www.npmjs.com/package/@mayajs/core",
      description: "Core library",
    },
    {
      name: "@mayajs/common",
      url: "https://www.npmjs.com/package/@mayajs/common",
      description: "Common modules",
    },
    {
      name: "@mayajs/router",
      url: "https://www.npmjs.com/package/@mayajs/router",
      description: "Routing library",
    },
    {
      name: "@mayajs/cli",
      url: "https://www.npmjs.com/package/@mayajs/cli",
      description: "Project scaffolding",
    },
    {
      name: "@mayajs/mongo",
      url: "https://www.npmjs.com/package/@mayajs/mongo",
      description: "MongoDB Plugin",
    },
    {
      name: "@mayajs/sql",
      url: "https://www.npmjs.com/package/@mayajs/sql",
      description: "SQL Plugin",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
