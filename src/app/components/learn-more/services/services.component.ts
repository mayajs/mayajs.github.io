import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit, AfterViewInit {
  @ViewChild("iframe") iframe: ElementRef;
  gistId = "https://gist.github.com/Mackignacio/a30c285fae14a50cdb5986b515a9a55e.js";

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
