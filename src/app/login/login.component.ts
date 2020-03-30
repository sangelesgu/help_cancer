import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(public _route: ActivatedRoute, public _users: UsersService) {

    this._route.params.subscribe( params=>{

    })
   }

loginData : object = {}

typeLogin(){
  if (this._route.snapshot.params['login/user']){
    this.loginUser()

  } else {
    this._route.snapshot.params['login/specialist']
    this.loginSpecialist()
  }
}

loginUser(){
  this._users.loginUser(this.loginData)
}

loginSpecialist(){
  console.log(this.loginData)
  this._users.loginSpecialist(this.loginData)
}

}
