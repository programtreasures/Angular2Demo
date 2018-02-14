import { Component } from "@angular/core";

@Component({ 
    selector: 'my-app',
    //template: `<h1>{{name}}<h1>`
    templateUrl: 'app/app.component.html'
}) 
export class AppComponent{
    pageTitle: string = "Employee Details";
    imageUrl: string = "http://media.moddb.com/images/downloads/1/87/86682/bluedemobutton.jpg";
    innerHtmlText = "<b>Awsome demo</b><script>alert('hello')</script>";
    isDisabled = true;
}
