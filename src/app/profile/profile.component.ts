import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../services/users.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public indice: string = "";
  public id: any = "";
  public users: object = {};
  public editProfile : object = {};

  constructor(public _users: UsersService, public _route: ActivatedRoute, public _http: HttpClient) {
    this._route.params.subscribe(params => {
      this.id = params['id']
    })

   this._users.getOneUser(this.id)
  }

  updateProfile(){
    console.log(this.editProfile)
    this._users.updateUser(this.editProfile, this.id);
    return true;
  }

  logOut(){
    this._users.isLogged = false
  }

}


