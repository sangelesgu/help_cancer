import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  myUrl: string = "http://localhost:3000"
  listArticles: any;
  show: boolean = false;
  groupList: object = {};
  group: object = {};
  dataArticles: object[];
  articles : any;


  constructor(public _http: HttpClient) {

    this.posts();
    this.groups();


  }

  filtrar(textoBusqueda) {
    this.listArticles = this.articles;
    this.dataArticles = [];
    textoBusqueda = textoBusqueda.toLowerCase();
    console.log(textoBusqueda)
    if (textoBusqueda === "") {
      this.posts();

    } else {

      for (let i = 0; i < this.listArticles.length; i++) {

        let articulo = this.listArticles[i];
        let encontradoNombre = articulo["title"].toLowerCase().indexOf(textoBusqueda) !== -1;
        let encontradoDescription = articulo["description"].toLowerCase().indexOf(textoBusqueda) !== -1;
        if (encontradoNombre || encontradoDescription) {
          console.log(articulo)

          this.dataArticles.push(articulo);
        }
      }
      this.listArticles = this.dataArticles;
      this.dataArticles = [];

      console.log(this.dataArticles)

    }
  }


  posts() {

    this._http.get(`${this.myUrl}/articles`).subscribe
      ((response) => {
        this.listArticles = response;
        this.articles = response;

      })
  }

  groups() {

    this._http.get(`${this.myUrl}/groups`).subscribe
      ((response) => {
        this.groupList = response;
        console.log(response)
      })
  }

  getGroup(id) {
    this._http.get(`${this.myUrl}/group/${id}`).subscribe
      ((data) => {
        console.log(data)
        this.group = data;
      })
  }

  getoneGroup(index: string) {
    return this.groupList[index];
  }


}
