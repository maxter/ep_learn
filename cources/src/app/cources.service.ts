import { CourceItem } from './cource-item';
import { ICourceItem } from './icourceitem';

export class CourcesService{
    public cources: ICourceItem[] = 
    [new CourceItem(1, "lesson 1", '10.01.2019', 5, "Some description 1"),
    new CourceItem(2, "lesson 2", '11.04.2019', 80, "Some description 2",true),
    new CourceItem(3, "lesson 3 test", '04.04.2001', 60, "Some description 3")]
      
    getCources(): ICourceItem[] {          
        return this.cources;
    }

    getCourceById(id:number){
      return this.cources.filter(x => x.Id == id)[0]
    }

    updateCource(id:number, title: string, conductAt:string, durationMin:number, description:string, isStarred:boolean = false){
        let courceIndex = this.cources.findIndex(x => x.Id == id);
        this.cources[courceIndex] = new CourceItem(id, title, conductAt, durationMin, description, isStarred);
    }

    
    updateCourceObject(courceItem:ICourceItem){
      if(courceItem.Id != null)
      {
        let courceIndex = this.cources.findIndex(x => x.Id == courceItem.Id);
        this.cources[courceIndex] = new CourceItem(courceItem.Id, courceItem.Title, String(courceItem.ConductAt), courceItem.DurationMin, courceItem.Description, courceItem.Starred);
      }
      else{
        courceItem.Id = this.getCources().length + 1;
        this.addCourceObject(courceItem);
      }
    }
    
    addCource(id:number, title: string, conductAt:string, durationMin:number, description:string, isStarred:boolean = false){
        this.cources.push(new CourceItem(id, title, conductAt, durationMin, description, isStarred));
    }

    addCourceObject(item:ICourceItem){
      this.cources.push(item);
    }

    removeCource(id:number){
      let index = this.cources.findIndex(x => x.Id == id);
      if (index > -1) {
        this.cources.splice(index, 1);
      }
    }


}