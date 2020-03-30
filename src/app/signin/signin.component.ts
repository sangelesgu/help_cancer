import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginData : object = {};

  constructor(public _route: ActivatedRoute, public _users: UsersService) {

  }

  ngOnInit(): void {
  }

  loginSpecialist() {
    console.log(this.loginData)
    this._users.loginSpecialist(this.loginData)
  }
}
