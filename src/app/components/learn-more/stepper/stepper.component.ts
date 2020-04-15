import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const allItems = document.querySelectorAll(".navmenu ul li a");
    allItems.forEach(item => {
    item.addEventListener('click', function(e) {

        for (var i=0; i<allItems.length; i++){
            allItems[i].classList.remove("active");
        }
        this.classList.add('active');
       })
    })
  }

}
