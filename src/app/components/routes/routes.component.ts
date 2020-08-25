import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-routes",
  templateUrl: "./routes.component.html",
  styleUrls: ["./routes.component.scss"],
})
export class RoutesComponent implements OnInit, AfterViewInit {
  @ViewChild("controller") controllerFrame: ElementRef;
  controllerId = "https://gist.github.com/Mackignacio/4d4efa1579130a8409879cb1ddac07f0.js";

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const codes = [{ iframe: this.controllerFrame, id: this.controllerId }];
    codes.forEach(code => this.createCode(code));
  }

  createCode(code: { iframe: ElementRef<any>; id: string }) {
    code.iframe.nativeElement.id = "gist-" + code.id;
    const doc = code.iframe.nativeElement.contentDocument || code.iframe.nativeElement.contentElement.contentWindow;
    const content = `
        <html>
        <head>
          <base target="_parent">
        </head>
        <script type="text/javascript" src="${code.id}"></script>
        </body>
      </html>
    `;
    doc.open();
    doc.write(content);
    doc.close();
  }
}
