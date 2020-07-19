import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-models",
  templateUrl: "./models.component.html",
  styleUrls: ["./models.component.scss"],
})
export class ModelsComponent implements OnInit, AfterViewInit {
  @ViewChild("iframe") iframe: ElementRef;
  gistId = "https://gist.github.com/Mackignacio/2587f6b71372e2f60e447c9924706add.js";

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
