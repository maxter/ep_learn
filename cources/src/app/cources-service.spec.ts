import { TestBed, inject  } from '@angular/core/testing';
import { CourcesService } from './cources.service';
import {CourceItem } from './cource-item'

describe('CourcesService', () => { 
  let mockData : any;
  
  beforeEach(() => TestBed.configureTestingModule({
    providers: [CourcesService]
  }));

  beforeEach(() => {
    mockData = [new CourceItem(1, "lesson 1", '10.01.2019', 5, "Some description 1"),
    new CourceItem(2, "lesson 2", '11.04.2019', 80, "Some description 2",true)];
  });

  it('should be created', () => {
    const service: CourcesService = TestBed.get(CourcesService);
    expect(service).toBeTruthy();
  });

  it('should return all cources', () => {
    const service: CourcesService = TestBed.get(CourcesService);
    service.cources =  mockData;
    let cources = service.getCources();
    expect(cources.length).toBe(2) && expect(cources[1].Id).toBe(2) && expect(cources[0].Id).toBe(1);
  });

  it('should return particular cource', () => {
    const service: CourcesService = TestBed.get(CourcesService);
    service.cources = mockData;
    let cource = service.getCourceById(2);
    expect(cource.Id).toBe(2)
  });

  it('should delete particular cource', () => {
    const service: CourcesService = TestBed.get(CourcesService);
    service.cources = mockData;
    service.removeCource(2);
    let cources = service.getCources();
    expect(cources.length).toBe(1) && expect(cources[1].Id).toBe(1);
  });  

  it('should add cource', () => {
    const service: CourcesService = TestBed.get(CourcesService);
    service.cources = mockData;
    let addedCource = new CourceItem(5,"testTitle","01.01.2001",50,"testDesc",true);
    service.addCourceObject(addedCource);
    let courceToCompare = service.getCourceById(5);
    expect(addedCource).toBe(courceToCompare);
  });  
});



