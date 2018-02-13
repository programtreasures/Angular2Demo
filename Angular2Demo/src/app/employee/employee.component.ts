import { Component } from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html'
})
export class EmployeeComponent {
    firstname: string = "Dipika";
    lastname: string = "Padukone";
    gender: string = "Female";
    age: number = 25;
}