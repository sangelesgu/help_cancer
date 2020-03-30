import { Component  } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-specialists-list',
  templateUrl: './specialists-list.component.html',
  styleUrls: ['./specialists-list.component.css']
})
export class SpecialistsListComponent  {


  allSpecialist: object = {};
  constructor(public _users: UsersService, public _route: ActivatedRoute, public _routes: Router) {

    this._users.getSpecialists();
   }

   viewSpecialist(index: number){
    this._routes.navigate(["/specialist", index]);
  }

}
