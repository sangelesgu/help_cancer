import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent  {

  constructor(public _data: DataService, public _routes: ActivatedRoute,  public _router: Router, public _users: UsersService) {

    this._data.groups();
    this._users.isLogged
   }

   viewGroup(index: number){
     this._router.navigate(["/group", index]);
   }

  /*  show(){

    this._users.isLogged = ! this._users.isLogged
   } */

}
