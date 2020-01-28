import { CourceItem } from './cource-item';
import { ICourceItem } from './icourceitem';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class CourcesService {

  public cources: ICourceItem[] = [];

  courcesObservable: Observable<ICourceItem[]>;
  apiURL: string = 'http://localhost:3000/cources';
  page: string;
  limit: string;

  constructor(private httpClient: HttpClient) {
  }

  getParamString(): string {
    if (this.page && this.limit) {
      return "?_page=" + this.page + "&_limit=" + this.limit;
    }
    else return "?_page=1&_limit=2";
  }

  getCources(): ICourceItem[] {
    return this.cources;
  }

  getObservableCources(): Observable<ICourceItem[]> {
    return this.httpClient.get<[ICourceItem]>(this.apiURL + this.getParamString());
  }

  setCourcePage(begin: number, amount: number) {
    this.page = String(begin);
    this.limit = String(amount);
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

  findCources(keyword: string) {
    if (!keyword)
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

    var newItem: any = {}
    newItem.Title = item.Title
    newItem.ConductAt = item.ConductAt;
    newItem.DurationMin = item.DurationMin
    newItem.Description = item.Description
    newItem.Starred = item.Starred;

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    // return fetch(this.apiURL, options)
    // .then((response) => response.json)
    console.log(' SERVICE ADD ')
    return this.httpClient.post<[ICourceItem]>(this.apiURL, JSON.stringify(newItem), options);

  }

  removeCource(id: number) {
    this.httpClient
      .delete('http://localhost:3000/cources/' + id)
      .subscribe((s) => {


        console.log(s);
      });




  }
}