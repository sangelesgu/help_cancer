import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-specialist-form',
  templateUrl: './specialist-form.component.html',
  styleUrls: ['./specialist-form.component.css']
})
export class SpecialistFormComponent  {

  formSpecialist: object = {};

  constructor(public _users: UsersService, public _route: ActivatedRoute) { }



  submitForm(){
    this._users.submitFormSpecialist(this.formSpecialist)
    console.log(this.formSpecialist)
  }

}
