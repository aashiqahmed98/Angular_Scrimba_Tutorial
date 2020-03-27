import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import {FilterTextboxComponent} from './customers-list/filter-textboxcomponent';

@NgModule({
  declarations: [
    CustomersComponent
    ,CustomersListComponent,
    FilterTextboxComponent
  ],
  imports: [
    CommonModule 
  ],
  providers: [],
 // bootstrap: [AppComponent] 
 exports: [CustomersComponent]

})
export class CustomersModule { }
