import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss']
})
export class RouterComponent implements OnInit {
  firstRow = [
    { name: "import", style: "red", spacing: true },
    { name: "maya", style: ""},
    { name: "from", style: "red"},
    { name: "maya", style: ""},
    { name: '"@mayajs/router"', style: "blue"},
    { name: ";", style: ""},
  ];
  secondRow = [
    { name: "import", style: "red", spacing: true },
    { name: "http", style: "", spacing: true },
    { name: "from", style: "red", spacing: true },
    { name: '"http"', style: "blue", spacing: true },
    { name: ";", style: "", spacing: true },
  ];
  thirdRow = [
    { name: "const", style: "red", spacing: true },
    { name: "port", style: "", spacing: true },
    { name: "=", style: "blue", spacing: true },
    { name: '"3000"', style: "blue", spacing: true },
    { name: ";", style: "", spacing: true },
  ];
  fourthRow = [
    { name: "const", style: "red", spacing: true },
    { name: "app", style: "", spacing: true },
    { name: "=", style: "blue", spacing: true },
    { name: '"maya()"', style: "purple", spacing: true },
    { name: ";", style: "", spacing: true },
  ];
  fifthRow = [
    { name: "app.", style: "", spacing: true },
    { name: "add", style: "purple", spacing: true },
    { name: "(", style: "", spacing: false },
    { name: '[', style: "", spacing: false },
  ];
  sixthRow = [
    { name: "path", style: "blue", spacing: true },
    { name: ":", style: "", spacing: true },
    { name: '"/"', style: "lightBlue", spacing: true },
    { name: ",", style: "", spacing: true },
  ];  
  seventhRow = [
    { name: "GET", style: "purple", spacing: true },
    { name: ":", style: "", spacing: true },
    { name: "()", style: "", spacing: true },
    { name: "=>", style: "blue", spacing: true },
    { name: '"Hello, World"', style: "lightBlue", spacing: true },
    { name: ",", style: "", spacing: true },
  ];  
  eightRow = [
    { name: "http.", style: "", spacing: true },
    { name: "createServer", style: "purple", spacing: true },
    { name: "(app).", style: "", spacing: true },
    { name: "listen", style: "purple", spacing: true },
    { name: "(PORT, ()", style: "", spacing: true },
    { name: "=>", style: "blue", spacing: true },
    { name: "console.", style: "", spacing: true },
    { name: "log", style: "purple", spacing: true },
    { name: "(", style: "", spacing: true },
    { name: "'Server listening on port", style: "lightBlue", spacing: true },
    { name: "${PORT}", style: "", spacing: true },
    { name: ".'", style: "lightBlue", spacing: true },
    { name: "));", style: "", spacing: true },
  ];  
  ninthRow = [
    { name: "const", style: "red", spacing: true },
    { name: "user", style: "", spacing: true },
    { name: "=", style: "lightBlue", spacing: true },
    { name: "{", style: "", spacing: true },
  ];
  tenthRow = [
    { name: "path", style: "blue", spacing: true },
    { name: ":", style: "", spacing: true },
    { name: '"user"', style: "lightBlue", spacing: true },
    { name: "{", style: "", spacing: true },
  ];
  eleventhRow = [
    { name: "GET", style: "purple", spacing: true },
    { name: ":", style: "", spacing: true },
    { name: "()", style: "", spacing: true },
    { name: "=>", style: "blue", spacing: true },
    { name: "{", style: "", spacing: true },
  ];
  twelveRow = [
    { name: "POST", style: "purple", spacing: true },
    { name: ":", style: "", spacing: true },
    { name: "()", style: "", spacing: true },
    { name: "=>", style: "blue", spacing: true },
    { name: "{", style: "", spacing: true },
  ];
  thirteenRow = [
    { name: "PUT", style: "purple", spacing: true },
    { name: ":", style: "", spacing: true },
    { name: "()", style: "", spacing: true },
    { name: "=>", style: "blue", spacing: true },
    { name: "{", style: "", spacing: true },
  ];
  fourteenRow = [
    { name: "PATCH", style: "purple", spacing: true },
    { name: ":", style: "", spacing: true },
    { name: "()", style: "", spacing: true },
    { name: "=>", style: "blue", spacing: true },
    { name: "{", style: "", spacing: true },
  ];
  fifteenRow = [
    { name: "DELETE", style: "purple", spacing: true },
    { name: ":", style: "", spacing: true },
    { name: "()", style: "", spacing: true },
    { name: "=>", style: "blue", spacing: true },
    { name: "{", style: "", spacing: true },
  ];
  sixteenRow = [
    { name: "OPTIONS", style: "purple", spacing: true },
    { name: ":", style: "", spacing: true },
    { name: "()", style: "", spacing: true },
    { name: "=>", style: "blue", spacing: true },
    { name: "{", style: "", spacing: true },
  ];
  seventeenRow = [
    { name: "const", style: "red", spacing: true },
    { name: "route", style: "", spacing: true },
    { name: "=", style: "lightBlue", spacing: true },
    { name: "{", style: "", spacing: true },
  ];
  eighteenRow = [
    { name: "path", style: "blue", spacing: true },
    { name: ":", style: "", spacing: true },
    { name: '"user"', style: "lightBlue", spacing: true },
    { name: "{", style: "", spacing: true },
  ];
  nineteenRow = [
    { name: "GET", style: "purple", spacing: true },
    { name: ":", style: "", spacing: true },
    { name: "()", style: "", spacing: true },
    { name: "=>", style: "blue", spacing: true },
    { name: "{", style: "", spacing: true },
  ];
  twentyRow = [
    { name: "// This will return `undefined`", style: "gray", spacing: true },
  ];
  twentyOneRow = [
    { name: '// This will have a content-type of "text/plain"', style: "gray", spacing: true },
  ];
  twentytwoRow = [
    { name: "POST", style: "purple", spacing: true },
    { name: ":", style: "", spacing: true },
    { name: "()", style: "", spacing: true },
    { name: "=>", style: "blue", spacing: true },
    { name: "{", style: "", spacing: true },
  ];
  twentythreeRow = [
    { name: 'return "Hello"; // This will have a content-type of "text/plain"', style: "gray", spacing: true },
  ];
  twentyfourRow = [
    { name: "PUT", style: "purple", spacing: true },
    { name: ":", style: "", spacing: true },
    { name: "()", style: "", spacing: true },
    { name: "=>", style: "blue", spacing: true },
    { name: "{", style: "", spacing: true },
  ];
  twentyfiveRow = [
    { name: 'return { message: "Hello" }; // This will have a content-type of "application/json"', style: "gray", spacing: true },
  ];
  twentysixRow = [
    { name: "PATCH", style: "purple", spacing: true },
    { name: ":", style: "", spacing: true },
    { name: "()", style: "", spacing: true },
    { name: "=>", style: "blue", spacing: true },
    { name: "{", style: "", spacing: true },
  ];
  twentysevenRow = [
    { name: 'return "<h1>Hello</h1>"; // This will have a content-type of "text/html"', style: "gray", spacing: true },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
