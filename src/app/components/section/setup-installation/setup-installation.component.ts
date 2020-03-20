import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-installation',
  templateUrl: './setup-installation.component.html',
  styleUrls: ['./setup-installation.component.scss']
})
export class SetupInstallationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {window.addEventListener('DOMContentLoaded', () => {
    const options = {
          root: null,
          rootMargin: "-300px -50px",
          threshold: .1
    };

    const observer = new IntersectionObserver(isTouching, options);
    //observe all
    document.querySelectorAll('section[id]').forEach((section) => {
          observer.observe(section);
          
    });
});

function isTouching(entries, observer) {
    entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          if (entry.isIntersecting) {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
          } else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
          }
    });
}
  }
}
