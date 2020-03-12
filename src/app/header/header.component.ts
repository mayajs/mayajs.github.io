import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  HeaderLink = [
    {name: "features", link: "maya"},
    {name: "docs", link: "get-start"},
    {name: "resources", link: "resources"},
    {name: "events", link: "events"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  private val = 0

  toggle() {
    if(this.val == 0) {
      document.getElementById("sidenav").style.width = "0";
      document.getElementById("main-content").style.marginLeft = "0";
      this.val = 1;
    } else {
      document.getElementById("sidenav").style.width = "250px";
      document.getElementById("main-content").style.marginLeft = "250px";
      this.val = 0;
    }

  }
}
