import { Pipe, PipeTransform } from '@angular/core';
import { ICourceItem } from './icourceitem';

@Pipe({
    name: 'search',
    pure: false
})


export class SearchPipe implements PipeTransform {
    transform(items: any[], field : string, value : string): any[] {  
        if (!items) return [];
        if (!value || value.length == 0) return items;
        return items.filter(it => 
        it[field].toLowerCase().indexOf(value.toLowerCase()) !=-1);
      }
}