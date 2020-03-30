import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent  {

  indice: string = "";

  constructor(public _data: DataService, public _route: ActivatedRoute) {

    this.indice = _route.snapshot.params["id"];
  }



}
