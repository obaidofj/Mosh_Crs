import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./nav-bar/nav-bar.component";
import * as i2 from "@angular/router";
export class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "app-nav-bar");
        i0.ɵɵelement(1, "router-outlet");
    } }, directives: [i1.NavBarComponent, i2.RouterOutlet], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=app.component.js.map