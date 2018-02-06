import { Component, OnInit ,Inject} from '@angular/core';
import Typed from 'typed.js';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html', 
  styleUrls: ['homepage.component.css']
})
export class HomepageComponent implements OnInit {
  

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