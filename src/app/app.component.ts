import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item, ItemResponse } from './thearray.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngInstantSearch';
  
  constructor(private http: HttpClient) {}
  
  searchResults: Array<Item> = [];

  queryInput: string = '';  

  showMessages(arg: string) {
  this.http.post<ItemResponse>(
      'http://localhost:7700/indexes/movies/search', 
      { "q": `${arg}` })
      .subscribe(meiliResponse => {
        this.searchResults = meiliResponse.hits;
       }) // end of sub
   } // end of showMessages
} // end of class AppComponent
