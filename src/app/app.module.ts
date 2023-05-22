import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeOneComponent } from './employee-one/employee-one.component';
import { EmployeeTwoComponent } from './employee-two/employee-two.component';
import { EmployeeThreeComponent } from './employee-three/employee-three.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeOneComponent,
    EmployeeTwoComponent,
    EmployeeThreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
