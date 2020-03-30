import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  id : any= "";
  group : object = {};


  constructor(public _data: DataService, public _routes: ActivatedRoute, public _router: Router) {
    this._routes.params.subscribe(params => {
      this.id = params['_id']
    })

    this._data.getGroup(this.id);

    this._routes.params.subscribe(params=>{
      this.group = this._data.getoneGroup(params['_id'])
    });
   }



  ngOnInit(): void {
  }

}
