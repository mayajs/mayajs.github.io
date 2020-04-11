import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-subscribed",
  templateUrl: "./subscribed.component.html",
  styleUrls: ["./subscribed.component.scss"],
})
export class SubscribedComponent implements OnInit {
  svg = "../../../../assets/svg/mail.svg";

  constructor() {}

  ngOnInit(): void {}
}
