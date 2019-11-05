import {Directive, ElementRef} from '@angular/core';
 
@Directive({
    selector: '[urgent]'
})
export class CourceItemDateDirective{
     
    constructor(private elementRef: ElementRef){
         
        /*this.elementRef.nativeElement.style.color = '#FF00F0';
        this.elementRef.nativeElement.style.fontWeight = "bold";*/
    }
}