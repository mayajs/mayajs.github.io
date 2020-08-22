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
        { title: "Requirements", url: "requirements" },
        { title: "Installation", url: "installation" },
        { title: "Imports", url: "imports" },
      ],
    },
    {
      title: "Route",
      url: "route",
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
  ];

  constructor(public router: Router) {}

  ngOnInit(): void {}

  navigateUrl(value: string) {
    this.router.navigate([], { fragment: value });
  }
}
