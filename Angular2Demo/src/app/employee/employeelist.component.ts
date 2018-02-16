import { Component } from '@angular/core'

@Component({
    selector: 'employee-list',
    templateUrl: 'app/employee/employeelist.component.html',
    //styleUrls: ['app/employee/employeelist.component.css']
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
})
export class EmployeeListComponent {
    employees: any[]

    constructor() {
        this.employees = [
            { code: 'emp001', name: 'Test1', emailId: 'test1@gmail.com', salary: 5500.50, dateofjoining: '05/01/2011' },
            { code: 'emp002', name: 'Test2', emailId: 'test2@gmail.com', salary: 5540.00, dateofjoining: '10/12/2011' },
            { code: 'emp003', name: 'Test3', emailId: 'test3@gmail.com', salary: 6500.00, dateofjoining: '04/24/2015' },
            { code: 'emp004', name: 'Test4', emailId: 'test4@gmail.com', salary: 5500.00, dateofjoining: '01/11/2010' }
        ];
    }

    trackByEmployees(index: number, empoyee: any) {
        return empoyee.code;
    }

    refreshEmployees() {
        this.employees = [
            { code: 'emp001', name: 'Test1', emailId: 'test1@gmail.com', salary: 5500.50, dateofjoining: '05/01/2011' },
            { code: 'emp002', name: 'Test2', emailId: 'test2@gmail.com', salary: 5540.00, dateofjoining: '10/12/2011' },
            { code: 'emp003', name: 'Test3', emailId: 'test3@gmail.com', salary: 6500.00, dateofjoining: '04/24/2015' },
            { code: 'emp004', name: 'Test4', emailId: 'test4@gmail.com', salary: 5500.00, dateofjoining: '01/11/2010' },
            { code: 'emp005', name: 'Test5', emailId: 'test5@gmail.com', salary: 5000.00, dateofjoining: '03/14/2014' }
        ];
    }

}