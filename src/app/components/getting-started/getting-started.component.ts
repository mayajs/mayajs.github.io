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
      ],
    },
    {
      title: "Why Mayajs?",
      url: "why-mayajs",
      sub: [
        { title: "Easy to use", url: "easy" },
        { title: "Simplicity", url: "simplicity" },
        { title: "Typescript", url: "typescript" },
        { title: "In between", url: "inbetween" },
      ],
    },
    {
      title: "Components",
      url: "components",
      sub: [
        {
          title: "Controllers",
          url: "controllers",
        },
        {
          title: "Models",
          url: "models",
        },
        {
          title: "Service",
          url: "services",
        },
      ],
    },
    {
      title: "Databases",
      url: "databases",
      sub: [
        {
          title: "Mongodb",
          url: "mongo",
        },
        {
          title: "SQL",
          url: "sql",
        },
        {
          title: "Postgres",
          url: "postgres",
        },
      ],
    },
    {
      title: "Routing",
      url: "routing",
    },
    {
      title: "Middlewares",
      url: "middlewares",
    },
    {
      title: "Validation",
      url: "validation",
    },
    {
      title: "FAQs",
      url: "faqs",
    },
  ];

  constructor(public router: Router) {}

  ngOnInit(): void {}

  gotoFragment(value: string) {
    this.router.navigate([], { fragment: value });
  }

  gotoPage(value: string) {
    this.router.navigate([`/get-started/${value}`]);
  }
}
