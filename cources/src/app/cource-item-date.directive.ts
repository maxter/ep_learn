import {Directive, ElementRef, Input, OnInit} from '@angular/core';
 
@Directive({
    selector: '[fresh]'
})
export class CourceItemDateDirective{
    @Input() courceDate = "";
        
    ngOnInit(){
        const twoWeeksAgo= (date) => {
            const twoWeeks = 14 * 24 * 1000 * 60 * 60;
            const twoWeeksAgo = Date.now() - twoWeeks;
        
            return date > twoWeeksAgo;
        }

        if(twoWeeksAgo(new Date(this.courceDate)))
        {
            this.elementRef.nativeElement.style.border = '2px solid green';
        }
    }

    constructor(private elementRef: ElementRef){    
    }
}