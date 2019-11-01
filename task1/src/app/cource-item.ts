import { ICourceItem } from './icourceitem';

export class CourceItem implements ICourceItem {
    Id:number; 
    Title: string;
    ConductAt:Date; 
    DurationMin:number;
    Description:string;
}
