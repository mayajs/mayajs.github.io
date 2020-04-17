import { Component, OnInit } from "@angular/core";
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: "app-models",
  templateUrl: "./models.component.html",
  styleUrls: ["./models.component.scss"],
})
export class ModelsComponent implements OnInit {
  GSsvg = {
    copyIcon: "../../../assets/svg/copypaste-icon.svg"
  };

  constructor() {}

  ngOnInit(): void {}
}
