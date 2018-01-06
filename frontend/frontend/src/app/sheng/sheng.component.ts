import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';


import { ItemService } from '../services/item.service';
import { Item, Results } from '../modals/items';


@Component({
  selector: 'app-sheng',
  templateUrl: './sheng.component.html',
  styleUrls: ['./sheng.component.css']
})

export class ShengComponent implements OnInit {
  item: Item = {
    text:'',
  }
  results: Results = {
    text:'',
    neg:0,
    pos:0
  }
  items: any;

  constructor(private _http:Http) { }

  ngOnInit() {
  }


  onSubmit(){
    if(this.item.text != ''){
    this.results = {"text":this.item.text, "neg": 45, "pos": 55};
    this.items = this._http.get('https://pixabay.com/api/?key=7038477-d3b39fd199dcd4adff4d855bd&q=');
    return this.items;
      
    }
  }

}


