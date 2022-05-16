import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Nestedcomponent1Component } from './nestedcomponent1/nestedcomponent1.component';
import { Nestedcomponent2Component } from './nestedcomponent2/nestedcomponent2.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { ParentOutputComponent } from './parent-output/parent-output.component';
import { ChildOutputComponent } from './child-output/child-output.component';
import { DemocomponentComponent } from './democomponent/democomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    Nestedcomponent1Component,
    Nestedcomponent2Component,
    EmployeelistComponent,
    ParentOutputComponent,
    ChildOutputComponent,
    DemocomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
