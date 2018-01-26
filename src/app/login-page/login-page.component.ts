import { Component } from '@angular/core';
import {AF} from "../providers/af";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(public af: AF, private router: Router) { }

  public login(){
    this.af.loginWithGoogle();
    this.router.navigate(['']);
  }
}
