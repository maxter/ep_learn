import { Pipe, PipeTransform } from '@angular/core';
import { NgModule } from '@angular/core';

@Pipe({
    name: 'lessonTime'
  })
  export class LessonPipe implements PipeTransform {
    transform(value: number): string {
       if(value > 0 && value/60 < 1) {
         return value + ' Minutes';
   
       } else {
         return value/60 + ' Hour(s)';
       }
    }
  }
