"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = "Employee Details";
        this.imageUrl = "http://media.moddb.com/images/downloads/1/87/86682/bluedemobutton.jpg";
        this.innerHtmlText = "<b>Awsome demo</b><script>alert('hello')</script>";
        this.isDisabled = true;
        this.applyClasses = "italicClass";
        this.isApplyRedClass = "redClass";
        this.isBold = true;
        this.fontSize = 30;
    }
    AppComponent.prototype.getClasses = function () {
        var classes = {
            boldClass: true,
            italicClass: false
        };
        return classes;
    };
    AppComponent.prototype.getStyles = function () {
        var styles = {
            'fontWeight': this.isBold ? 'bold' : '',
            'fontSize.px': this.fontSize
        };
        return styles;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        //template: `<h1>{{name}}<h1>`
        templateUrl: 'app/app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map