import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class NavBarComponent {
    constructor() { }
    ngOnInit() { }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 30, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["routerLink", "", 1, "navbar-brand"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "active"], ["routerLink", "/", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["routerLink", "posts", 1, "nav-link"], ["routerLink", "", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], ["routerLink", "login", 1, "dropdown-item"], ["routerLink", "admin", 1, "dropdown-item"], ["routerLink", "#", 1, "dropdown-item"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav", 0);
        i0.ɵɵelementStart(1, "a", 1);
        i0.ɵɵtext(2, "Angular");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "ul", 3);
        i0.ɵɵelementStart(5, "li", 4);
        i0.ɵɵelementStart(6, "a", 5);
        i0.ɵɵtext(7, "Home \u00A0\u00A0\u00A0 ");
        i0.ɵɵelementStart(8, "span", 6);
        i0.ɵɵtext(9, "(current)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "li", 7);
        i0.ɵɵelementStart(11, "a", 8);
        i0.ɵɵtext(12, "posts \u00A0\u00A0\u00A0\u00A0");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "li", 7);
        i0.ɵɵelement(14, "a", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "li", 7);
        i0.ɵɵelement(16, "a", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "li", 10);
        i0.ɵɵelementStart(18, "a", 11);
        i0.ɵɵtext(19, " Topics \u00A0\u00A0\u00A0 \u00A0\u00A0 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "div", 12);
        i0.ɵɵelementStart(21, "a", 13);
        i0.ɵɵtext(22, "Login");
        i0.ɵɵelement(23, "br");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "a", 14);
        i0.ɵɵtext(25, "Admin");
        i0.ɵɵelement(26, "br");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "a", 15);
        i0.ɵɵtext(28, "Something else here");
        i0.ɵɵelement(29, "br");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.RouterLinkWithHref], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NavBarComponent, [{
        type: Component,
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css'],
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=nav-bar.component.js.map