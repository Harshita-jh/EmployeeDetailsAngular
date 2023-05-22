import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-three',
  templateUrl: './employee-three.component.html',
  styleUrls: ['./employee-three.component.css']
})
export class EmployeeThreeComponent {
  employeedetails:any = 
  {
    name:"Rohan",
    id:123456,
    age:30,
    salary:60700,
  }

}
