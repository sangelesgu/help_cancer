import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.css']
})
export class SpecialistComponent  {

  specialist : any = {};

  constructor(public _users: UsersService, public _route: ActivatedRoute, ) {

    this._route.params.subscribe( params=>{
      this.specialist = this._users.getSpecialist(params['id']);
      });

   }
}
