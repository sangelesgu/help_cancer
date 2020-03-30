import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  formData : object = {}


  constructor(public _route: ActivatedRoute, public _users: UsersService) {

   }



 submitData(){
    alert("Datos enviados");
    this._users.submitData(this.formData)
  }

}
