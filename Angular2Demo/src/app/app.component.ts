import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    //template: `<h1>{{name}}<h1>`
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    pageTitle: string = "Employee Details";
    imageUrl: string = "http://media.moddb.com/images/downloads/1/87/86682/bluedemobutton.jpg";
    innerHtmlText = "<b>Awsome demo</b><script>alert('hello')</script>";
    isDisabled = true;

    applyClasses: string = "italicClass";
    isApplyRedClass = "redClass";

    getClasses() {
        let classes = {
            boldClass: true,
            italicClass: false
        }
        return classes;
    }

    isBold: boolean = true;
    fontSize: number = 30;

    getStyles() {
        let styles = {
            'fontWeight': this.isBold ? 'bold' : '',
            'fontSize.px': this.fontSize
        }

        return styles;
    }
}
