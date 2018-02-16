"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeListComponent = (function () {
    function EmployeeListComponent() {
        this.employees = [
            { code: 'emp001', name: 'Test1', emailId: 'test1@gmail.com', salary: 5500.50, dateofjoining: '05/01/2011' },
            { code: 'emp002', name: 'Test2', emailId: 'test2@gmail.com', salary: 5540.00, dateofjoining: '10/12/2011' },
            { code: 'emp003', name: 'Test3', emailId: 'test3@gmail.com', salary: 6500.00, dateofjoining: '04/24/2015' },
            { code: 'emp004', name: 'Test4', emailId: 'test4@gmail.com', salary: 5500.00, dateofjoining: '01/11/2010' }
        ];
    }
    EmployeeListComponent.prototype.trackByEmployees = function (index, empoyee) {
        return empoyee.code;
    };
    EmployeeListComponent.prototype.refreshEmployees = function () {
        this.employees = [
            { code: 'emp001', name: 'Test1', emailId: 'test1@gmail.com', salary: 5500.50, dateofjoining: '05/01/2011' },
            { code: 'emp002', name: 'Test2', emailId: 'test2@gmail.com', salary: 5540.00, dateofjoining: '10/12/2011' },
            { code: 'emp003', name: 'Test3', emailId: 'test3@gmail.com', salary: 6500.00, dateofjoining: '04/24/2015' },
            { code: 'emp004', name: 'Test4', emailId: 'test4@gmail.com', salary: 5500.00, dateofjoining: '01/11/2010' },
            { code: 'emp005', name: 'Test5', emailId: 'test5@gmail.com', salary: 5000.00, dateofjoining: '03/14/2014' }
        ];
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'employee-list',
        templateUrl: 'app/employee/employeelist.component.html',
        //styleUrls: ['app/employee/employeelist.component.css']
        styles: ["table {\n                color: #369;\n                font-family: Arial, Helvetica, sans-serif;\n                font-size: large;\n                border: 1px solid black;\n            }",
            "td {\n                    border: 1px solid red;\n                }"
        ],
    }),
    __metadata("design:paramtypes", [])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeelist.component.js.map