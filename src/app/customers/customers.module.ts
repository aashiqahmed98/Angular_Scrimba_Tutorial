import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomersComponent } from './customers.component';


@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
 // bootstrap: [AppComponent] 
 exports: [CustomersComponent]

})
export class CustomersModule { }
