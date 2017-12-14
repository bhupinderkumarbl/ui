import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  rForm: FormGroup;
  name: string = '';
  password: string = '';
  tittleAlert:string ="This field is required";



  public invalid:boolean;


  constructor( private router:Router, private fb:FormBuilder) {
    this.rForm = fb.group({
      'username':[null,Validators.required],
      'password':[null,Validators.required],
    })

  }



  abc: any[] = [
    {'username' : 'admin' , 'password' : '12345' }
  ];


  ngOnInit() {
    this.invalid = false;
  }

  loginUser(rFormValue,e) {
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    if(username == this.abc[0].username && password == this.abc[0].password){
      console.log(username,password)
      this.router.navigate(['DashboardComponent'])
    }
    else {
      this.invalid = true;
    }
  }


}