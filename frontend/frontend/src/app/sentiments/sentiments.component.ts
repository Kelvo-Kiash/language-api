import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';


import { ItemService } from '../services/item.service';
import { Item, Results } from '../modals/items';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-sentiments',
  templateUrl: './sentiments.component.html',
  styleUrls: ['./sentiments.component.css']
})

export class SentimentsComponent implements OnInit {
  item: Item = {
    text:'',
  }
  results: Results = {
    text:'',
    neg:0,
    pos:0
  }
  items: any;
  url:any;

  constructor(private _http:Http) { }

  ngOnInit() {
  }


  onSubmit(){
    if(this.item.text != ''){
      this.url = environment.rootApi + 'sentiments/';
      this.items = this._http.put(this.url, {"text":this.item.text}).subscribe(res =>
        console.log(res.json())
      );
      
    }
  }

}

