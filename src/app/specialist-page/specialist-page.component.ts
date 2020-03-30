import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-specialist-page',
  templateUrl: './specialist-page.component.html',
  styleUrls: ['./specialist-page.component.css']
})
export class SpecialistPageComponent implements OnInit {

  id : any = "";
  formUpdate: object = {};

  constructor(public _users: UsersService, public _route: ActivatedRoute, public _http: HttpClient) {
    this._route.params.subscribe( params =>{
      this.id = params['id']

    })

    this._users.getOneSpecialist(this.id);
   }

   updatePersonalPage(){
     console.log(this.formUpdate)
     this._users.updateSpecialist(this.formUpdate, this.id);
     return true;
   }

  ngOnInit(): void {
  }

}
