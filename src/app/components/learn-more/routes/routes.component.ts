import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-routes",
  templateUrl: "./routes.component.html",
  styleUrls: ["./routes.component.scss"],
})
export class RoutesComponent implements OnInit, AfterViewInit {
  @ViewChild("iframe") iframe: ElementRef;
  gistId = "https://gist.github.com/Mackignacio/f635530aef64df0305dda7c4cf4a916b.js";

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
