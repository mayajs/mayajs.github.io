import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  tabs = [
    { name: "Features", path: "/features" },
    { name: "Installation", path: "/learn-more/installation" },
    { name: "FAQ", path: "/faq" },
    { name: "Learn More", path: "/learn-more" },
  ];

  svg = {
    maya: "../../../assets/svg/logo-text.svg",
    hamburger: "../../../assets/svg/hamburger.svg",
  };
  constructor() {}

  ngOnInit(): void {}
}
