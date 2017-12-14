import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() {


  }

  ngOnInit() {
    let options = {
      strings: ["Product ", "Web ", "UX/UI"],
      typeSpeed:200,
      backSpeed:10,
      showCursor: true,
      cursorChar: "",
      loop:true
    }

    let typed = new Typed(".typing-element", options);
  }
}
