import { Component, Input, Output, EventEmitter, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function FavoriteComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Favarite");
    i0.ɵɵelementEnd();
} }
function FavoriteComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Not Favarite");
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0, a1) { return { "glyphicon-star": a0, "glyphicon-star-empty": a1 }; };
export class FavoriteComponent {
    constructor() {
        this.change = new EventEmitter();
    }
    ngOnInit() { }
    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    }
}
FavoriteComponent.ɵfac = function FavoriteComponent_Factory(t) { return new (t || FavoriteComponent)(); };
FavoriteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FavoriteComponent, selectors: [["favorite"]], inputs: { isFavorite: "isFavorite" }, outputs: { change: "change" }, decls: 5, vars: 6, consts: [[3, "click"], [1, "glyphicon", 3, "ngClass", "click"], [4, "ngIf"]], template: function FavoriteComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p", 0);
        i0.ɵɵlistener("click", function FavoriteComponent_Template_p_click_0_listener() { return ctx.onClick(); });
        i0.ɵɵtext(1, " favorite or no: ");
        i0.ɵɵelementStart(2, "span", 1);
        i0.ɵɵlistener("click", function FavoriteComponent_Template_span_click_2_listener() { return ctx.onClick(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, FavoriteComponent_span_3_Template, 2, 0, "span", 2);
        i0.ɵɵtemplate(4, FavoriteComponent_span_4_Template, 2, 0, "span", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c0, ctx.isFavorite, !ctx.isFavorite));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isFavorite);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isFavorite);
    } }, directives: [i1.NgClass, i1.NgIf], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FavoriteComponent, [{
        type: Component,
        args: [{
                selector: 'favorite',
                templateUrl: './favorite.component.html',
                styleUrls: ['./favorite.component.css'],
            }]
    }], function () { return []; }, { isFavorite: [{
            type: Input
        }], change: [{
            type: Output
        }] }); })();
//# sourceMappingURL=favorite.component.js.map