import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-getting-started",
  templateUrl: "./getting-started.component.html",
  styleUrls: ["./getting-started.component.scss"],
})
export class GettingStartedComponent implements OnInit {
  navItems = [
    {
      title: "Introduction",
      url: "introduction",
      sub: [
        { title: "Getting Started", url: "getting-started" },
        { title: "Overview", url: "overview" },
        { title: "Installation", url: "installation" },
        { title: "Imports", url: "imports" },
        { title: "Development", url: "development" },
      ],
    },
    {
      title: "Why Mayajs?",
      url: "why-mayajs",
      sub: [
        { title: "Easy to use", url: "easy" },
        { title: "Simple", url: "simplicity" },
        { title: "Typescript", url: "typescript" },
        { title: "In between", url: "inbetween" },
        { title: "Who uses MayaJS?", url: "users" },
      ],
    },
    {
      title: "Components",
      url: "components",
      sub: [
        { title: "Controllers", url: "controllers" },
        { title: "Models", url: "models" },
        { title: "Service", url: "services" },
        { title: "Routes", url: "routes" },
      ],
    },
    {
      title: "Methods",
      url: "methods",
      sub: [
        { title: "GET", url: "get" },
        { title: "POST", url: "post" },
        { title: "PUT", url: "put" },
        { title: "PATCH", url: "patch" },
        { title: "DELETE", url: "delte" },
      ],
    },
    {
      title: "Databases",
      url: "databases",
      sub: [
        { title: "Mongodb", url: "mongo" },
        { title: "SQL", url: "sql" },
        { title: "Postgres", url: "postgres" },
      ],
    },
    { title: "Router", url: "routing" },
    { title: "Middlewares", url: "middlewares" },
    { title: "Validation", url: "validation" },
    { itle: "FAQs", url: "faqs" },
  ];

  constructor(public router: Router) {}

  ngOnInit(): void {}

  gotoFragment(value: string, fragment: string) {
    this.router.navigate([`/get-started/${value}`], { fragment });
  }

  gotoPage(value: string) {
    this.router.navigate([`/get-started/${value}`]);
  }
}
