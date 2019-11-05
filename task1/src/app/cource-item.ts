import { ICourceItem } from './icourceitem';

export class CourceItem implements ICourceItem {
    Id:number; 
    Title: string;
    ConductAt:Date; 
    DurationMin:number;
    Description:string;


    constructor(id:number = null, title: string  = null, conductAt:Date  = null, durationMin:number  = null, description:string  = null) {
        
        if(id == null || title == null || conductAt == null || durationMin == null || description==null)
          return;
          
        this.Id = id;
        this.Title = title;
        this.ConductAt = conductAt;
        this.DurationMin = durationMin;
        this.Description = description;
    }
}
