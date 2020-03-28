import { Pipe, PipeTransform } from '@angular/core';

//Pipe is an decorator 
//Pipe transform is used to  transform value between pipes and components

@Pipe({ name: 'capitalize' }) //Here 'capitalize' is pipe name used in templates
export class CapitalizePipe implements PipeTransform {
    transform(value: any) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }
}