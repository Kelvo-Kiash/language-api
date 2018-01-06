import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { ItemService } from '../services/item.service';
import { Item, Results } from '../modals/items';

import { environment } from '../../environments/environment';



@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})


export class LanguageComponent implements OnInit {
  item: Item = {
    text:'',
  }
  results: Results = {
    text:'',
    neg:0,
    pos:0
  }
  items: Observable<any[]>;
  url:any;

  constructor(private _http:Http) { }

  ngOnInit() {
  }


  onSubmit(){
    if(this.item.text != ''){
    
    this.url = environment.rootApi + 'language/';
    this._http.put(this.url, {"text":this.item.text}).map(res =>
      {
      res.json();
      this.items = res.json()
      console.log(res.json());
      }
      );
   
      console.log(this.items);
    }
  }

}


