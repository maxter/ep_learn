import { CourceItem } from './cource-item';
import { ICourceItem } from './icourceitem';
import { Observable } from 'rxjs';
import { HttpClient } from  "@angular/common/http";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class CourcesService {

  courcesObservable : Observable<ICourceItem[]>;
  apiURL: string = 'http://localhost:3000/cources';

  constructor(private  httpClient:HttpClient) {
  }

  public cources: ICourceItem[] = [];
  /*public cources: ICourceItem[] =
    [new CourceItem(1, "lesson 1", '10.01.2019', 5, "Some description 1"),
    new CourceItem(2, "lesson search 2", '11.04.2019', 80, "Some description 2", true),
    new CourceItem(3, "lesson 3 test", '04.04.2001', 60, "search Some description 3")]*/

  getCources(): ICourceItem[] {
     return this.cources;
  }

  getObservableCources() : Observable<ICourceItem[]>{
    return this.httpClient.get<[ICourceItem]>(this.apiURL);
  }

  getCourcePage(begin: number, amount: number): ICourceItem[] {
    var res: ICourceItem[] = [];
    var arraStart : number = begin - 1;
    var end : number = Number(arraStart)+Number(amount);

    for (let i = arraStart; i < end; i++) {
      res.push(this.cources[i]);
    }
    return res;
  }

  getCourceById(id: number) {
    return this.cources.filter(x => x.id == id)[0]
  }

  getSize() {
    return this.cources.length;
  }

  updateCource(id: number, title: string, conductAt: string, durationMin: number, description: string, isStarred: boolean = false) {
    let courceIndex = this.cources.findIndex(x => x.id == id);
    this.cources[courceIndex] = new CourceItem(id, title, conductAt, durationMin, description, isStarred);
  }

  findCources(keyword:string)
  {
    if(!keyword)
      return this.getObservableCources();

    return this.httpClient.get(this.apiURL)
    .map((cources: Array<ICourceItem>) => cources.filter(cource => 
      cource.Title.includes(keyword) || cource.Description.includes(keyword)
    ));
  }


  updateCourceObject(courceItem: ICourceItem) {
    if (courceItem.id != null) {
      let courceIndex = this.cources.findIndex(x => x.id == courceItem.id);
      this.cources[courceIndex] = new CourceItem(courceItem.id, courceItem.Title, String(courceItem.ConductAt), courceItem.DurationMin, courceItem.Description, courceItem.Starred);
    }
    else {
      courceItem.id = this.getCources().length + 1;
      this.addCourceObject(courceItem);
    }
  }

  addCourceObject(item: ICourceItem) {
    var newItem:any = {}
    newItem.Title = item.Title
    newItem.ConductAt = item.ConductAt;
    newItem.DurationMin = item.DurationMin
    newItem.Description = item.Description
    newItem.Starred = item.Starred;

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    }
    return fetch(this.apiURL, options)
      .then((response) => response.json)

  }

  removeCource(id: number) {
    let index = this.cources.findIndex(x => x.id == id);
    if (index > -1) {
      this.cources.splice(index, 1);
    }
  }


}