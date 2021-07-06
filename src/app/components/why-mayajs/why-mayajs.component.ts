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
    "Uses latest and upcoming javascript features.",
    "Type checking while coding not on runtime.",
    "Less runtime errors.",
  ];

  companyList = [
    { alt: "Racket Studios", src: "http://racketstudios.com/wp-content/uploads/2018/07/Racket_Studios_logo.png" },
    { alt: "Summit Trampoline", src: "http://summittrampolinepark.com/wp-content/uploads/2016/08/Summit-logo-1.png" },
    { alt: "Cranium POS", src: "https://craniumpos.com/wp-content/uploads/2020/03/Asset-1.png" },
    { alt: "Shaktiman", src: "http://shaktimancomretro.com/assets/img/shaktiman.png" },
    { alt: "DitoSoft", src: "https://cdn.ditosoft.com/assets/logo/banner-black.png" },
    { alt: "Techcellar", src: "assets/png/techcellar_logo.png" },
    { alt: "PromdiFarm", src: "http://cdn.ditosoft.com/promdifarm/logo-hori-01.svg" },
    {
      alt: "Telos Health Solution",
      src: "https://www.teloshealthsolutions.com/wp-content/uploads/2019/08/title_telos.png",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  getCompanyList(rows = 4) {
    let count = 0;
    let current = 0;
    return this.companyList.reduce(
      (acc: any, company: any) => {
        if (count >= rows) {
          acc.push([]);
          count = 0;
          current++;
        }

        acc[current].push(company);
        count++;
        return acc;
      },
      [[]]
    );
  }
}
