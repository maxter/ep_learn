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
      },
      body: JSON.stringify(newItem)
    }
    // return fetch(this.apiURL, options)
    // .then((response) => response.json)
    console.log(' SERVICE ADD ')
    return this.httpClient.post<[ICourceItem]>(this.apiURL, options.body);

  }

  removeCource(id: number) {
    this.httpClient
      .delete('http://localhost:3000/cources/' + id)
      .subscribe((s) => {


        console.log(s);
      });




  }
}










// import { TestBed, inject  } from '@angular/core/testing';
// import { CourcesService } from './cources.service';
// import {CourceItem } from './cource-item'

// describe('CourcesService', () => { 
//   let mockData : any;
  
//   beforeEach(() => TestBed.configureTestingModule({
//     providers: [CourcesService]
//   }));

//   beforeEach(() => {
//     mockData = [new CourceItem(1, "lesson 1", '10.01.2019', 5, "Some description 1"),
//     new CourceItem(2, "lesson 2", '11.04.2019', 80, "Some description 2",true)];
//   });

//   it('should be created', () => {
//     const service: CourcesService = TestBed.get(CourcesService);
//     expect(service).toBeTruthy();
//   });

//   it('should return all cources', () => {
//     const service: CourcesService = TestBed.get(CourcesService);
//     service.cources =  mockData;
//     let cources = service.getCources();
//     expect(cources.length).toBe(2) && expect(cources[1].id).toBe(2) && expect(cources[0].id).toBe(1);
//   });

//   it('should return particular cource', () => {
//     const service: CourcesService = TestBed.get(CourcesService);
//     service.cources = mockData;
//     let cource = service.getCourceById(2);
//     expect(cource.id).toBe(2)
//   });

//   it('should delete particular cource', () => {
//     const service: CourcesService = TestBed.get(CourcesService);
//     service.cources = mockData;
//     service.removeCource(2);
//     let cources = service.getCources();
//     expect(cources.length).toBe(1) && expect(cources[1].id).toBe(1);
//   });  

//   it('should add cource', () => {
//     const service: CourcesService = TestBed.get(CourcesService);
//     service.cources = mockData;
//     let addedCource = new CourceItem(5,"testTitle","01.01.2001",50,"testDesc",true);
//     service.addCourceObject(addedCource);
//     let courceToCompare = service.getCourceById(5);
//     expect(addedCource).toBe(courceToCompare);
//   });  
// });



