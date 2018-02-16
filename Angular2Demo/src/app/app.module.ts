import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component'
import { EmployeeListComponent } from './employee/employeelist.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, EmployeeComponent, EmployeeListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
