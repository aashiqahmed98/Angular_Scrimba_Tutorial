import { NgModule } from '@angular/core';
import {CapitalizePipe} from './capitalize.pipe';

@NgModule({
    declarations: [  CapitalizePipe], //Pipe are like components declared in the declarations
    exports: [ CapitalizePipe ]
})
export class SharedModule { }