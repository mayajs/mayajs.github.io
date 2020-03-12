import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ResourcesLink = [
    {title: "About", link: "/about"},
    {title: "Resource Listing", link: "/resource-listing"},
    {title: "Pres Kit", link: "/press-kit"},
    {title: "Blog", link: "/blog"},
    {title: "Usage Analytics", link: "/usage-analitycs"}
  ];

  HelpLink = [
    {title: "Stack Overflow", link: "/stack-overflow"},
    {title: "Gitter", link: "/gitter"},
    {title: "Report Issues", link: "/report-issues"},
    {title: "Blog", link: "/code-of-condcut"}
  ];

  CommunityLink = [
    {title: "Events", link: "/events"},
    {title: "Meetups", link: "/meetups"},
    {title: "Tweeter", link: "/tweeter"},
    {title: "GitHub", link: "/github"},
    {title: "Contribute", link: "/contribute"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
