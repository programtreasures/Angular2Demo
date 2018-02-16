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
export class EmployeeListComponent
{
    employees: any[] = [
        { code: 'emp001', name: 'Test1', emailId: 'test1@gmail.com', dateofjoining: '05/01/2011' },
        { code: 'emp002', name: 'Test2', emailId: 'test2@gmail.com', dateofjoining: '10/12/2011' },
        { code: 'emp003', name: 'Test3', emailId: 'test3@gmail.com', dateofjoining: '20/04/2015' },
        { code: 'emp004', name: 'Test4', emailId: 'test4@gmail.com', dateofjoining: '22/01/2010' }
    ];
}