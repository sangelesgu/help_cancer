import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  indice: string = "";
  textoBusqueda : string;

  constructor(public _route: ActivatedRoute, public _data: DataService) {

    this.indice = _route.snapshot.params['id']
    this._data.posts();
  }

  onInput() {
    console.log(this.textoBusqueda)
    this._data.filtrar(this.textoBusqueda)
  }


}
