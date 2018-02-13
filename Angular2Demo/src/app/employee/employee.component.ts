import { Component } from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styles: [`table {
                color: #369;
                font-family: Arial, Helvetica, sans-serif;
                font-size: large;
                border: 1px solid black;
            }`,
            `td {
                    border: 1px solid red;
                }`
    ],
    //styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent {
    firstname: string = "Dipika";
    lastname: string = "Padukone";
    gender: string = "Female";
    age: number = 25;
}