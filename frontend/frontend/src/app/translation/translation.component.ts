import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';


import { ItemService } from '../services/item.service';
import { TranslationItem } from '../modals/items';

import { environment } from '../../environments/environment';


@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})






export class TranslationComponent implements OnInit {
  item: TranslationItem = {
    text:'',
    language_input:'',
    language_output:'',
  }

  url:any;
  items:any;
  

  constructor(private _http:Http) { }

  ngOnInit() {
  }


  onSubmit(){
    if(this.item.text != '' && this.item.language_input != '' && this.item.language_output != ''){
      this.url = environment.rootApi + 'translation/';
      this.items = this._http.put(this.url, {"text":this.item.text}).subscribe(res =>
        console.log(res.json())
      );
    
      
    }
  }

}


