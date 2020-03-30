import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  myEndpoint : string = "http://localhost:3000";
  allUsers: object = {};
  allSpecialists : object = {};
  user : object = {};
  users: Array <object> = [];
  loggedUser : object = {};
  specialist : object = {};
  loggedSpecialist : object = {};

  constructor(public _http: HttpClient, public _route: ActivatedRoute, public _router: Router, ) {


   }

   isLogged = false;

   /*  This part of code is
    for users:  */

// Submit user form register:
   submitData(formData){
    this._http.post(`${this.myEndpoint}/register/createUser`, formData)
    .subscribe((response) => {
      this._router.navigateByUrl('login')
      console.log(response)
    })
  }

  // Login user :
  loginUser(loginData){
    this._http.post(`${this.myEndpoint}/login/users`, loginData)
    .subscribe((response)=>{
      if(response["Message"] = "Welcome"){
        this.user = response['user']
        console.log(response)
        this.isLogged = true;
        document.cookie = `green = ${response['token']}`;
        this._router.navigateByUrl(`/profile/${this.user['_id']}`)
      }
    })
  };

  // List of users:
  getAllUsers(){
    this._http.get(`${this.myEndpoint}/users`).
    subscribe ((response)=>{
    this.users  = response as Array<object>
      console.log(this.users)
    })
  }

  // Get one user:
  getOneUser(id){
    if (this.isLogged = true){
      this._http.get(`${this.myEndpoint}/user/${id}`).subscribe( (data )=>{
        console.log(data)
        //this.user = user as Array <object>
        this.loggedUser = data
      })
    }
  };

  // Update user profile.
  updateUser(editProfile, id){
    console.log(id)
    this._http.put(`${this.myEndpoint}/editProfile/${id}`,editProfile).subscribe
    ((response)=>{

    })
  };

/*   this part of code is
  for the specialists: */

// List of specialists :
  getSpecialists(){
    this._http.get(`${this.myEndpoint}/specialists`)
    .subscribe((response)=>{
      this.allSpecialists = response
      console.log(response)
    })
  };

  //Login Specialist:
  loginSpecialist(loginData){
    this._http.post(`${this.myEndpoint}/login/specialist`, loginData)
    .subscribe( (response)=>{
      if(response["Message"] = "Welcome"){
        this.isLogged = true;
        this.specialist = response['specialist']
        console.log(response)
        document.cookie = `green = ${response['token']}`;
        this._router.navigateByUrl(`/specialistpage/${this.specialist['_id']}`)
      }
    })
  }

  // Get specialist by id:
  getOneSpecialist(id){
    if (this.isLogged = true){
      this._http.get(`${this.myEndpoint}/specialist/${id}`).subscribe( (data )=>{
        console.log(data)
        this.loggedSpecialist = data
        console.log(this.loggedSpecialist)
      })
    }
  };

// Index of specialist:
  getSpecialist(index:string) {
    return this.allSpecialists[index];
  }

  // Registrer specialist:
  submitFormSpecialist(formSpecialist){
    this._http.post(`${this.myEndpoint}/register/createSpecialist`, formSpecialist)
    .subscribe((response) => {
      this._router.navigateByUrl('/specialists')
      console.log(response)
    })
  }

  // Update specialist personal page:

  updateSpecialist(formUpdate, id){
    console.log(id)
    this._http.put(`${this.myEndpoint}/editSpecialist/${id}`, formUpdate).
    subscribe( (response)=>{
      console.log(response)
    })
  }

}




