import { Component} from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {


  constructor(public _data: DataService) {


    this._data.show



   }

showBtn(){
  this._data.show = ! this._data.show
}

}
