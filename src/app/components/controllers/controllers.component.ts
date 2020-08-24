import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-controllers",
  templateUrl: "./controllers.component.html",
  styleUrls: ["./controllers.component.scss"],
})
export class ControllersComponent implements OnInit, AfterViewInit {
  @ViewChild("iframe") iframe: ElementRef;
  gistId = "https://gist.github.com/Mackignacio/4d4efa1579130a8409879cb1ddac07f0.js";

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.iframe.nativeElement.id = "gist-" + this.gistId;
    const doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
    const content = `
        <html>
        <head>
          <base target="_parent">
        </head>
        <script type="text/javascript" src="${this.gistId}"></script>
        </body>
      </html>
    `;
    doc.open();
    doc.write(content);
    doc.close();
  }
}
