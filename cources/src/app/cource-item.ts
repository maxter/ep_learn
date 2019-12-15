import { ICourceItem } from './icourceitem';

export class CourceItem implements ICourceItem {
    id:number; 
    Title: string;
    ConductAt:Date; 
    DurationMin:number;
    Description:string;
    Starred:boolean;


    constructor(id:number = null, title: string  = null, conductAt:string  = null, durationMin:number  = null, description:string  = null, starred:boolean = false) {
        
        if(id == null || title == null || conductAt == null || durationMin == null || description==null)
          return;

        this.id = id;
        this.Title = title;
        this.ConductAt = new Date(conductAt);
        this.DurationMin = durationMin;
        this.Description = description;
        this.Starred = starred;
    }

    
}
