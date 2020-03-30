import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: string;
  specialist: string;
  constructor(public _route: ActivatedRoute, public _users: UsersService) {

    this.user = this._route.snapshot.params['login/users']
    this.specialist = this._route.snapshot.params['login/specialist']

  }

  loginData: object = {}



  loginUser() {
    this._users.loginUser(this.loginData)
    console.log(this.loginData)
  }



}
