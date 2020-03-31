import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent  {

  indice : string = "";
  allUsers : object = {};

  constructor(public _users: UsersService, public _route: ActivatedRoute, public _routes: Router) {

    this._users.getAllUsers();


  }





}
