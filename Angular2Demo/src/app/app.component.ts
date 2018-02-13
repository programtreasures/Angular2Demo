import { Component } from "@angular/core";

@Component({ 
    selector: 'my-app',
    //template: `<h1>{{name}}<h1>`
    templateUrl: 'app/app.component.html'
}) 
export class AppComponent{
    pageTitle:string = "Employee Details"
}
